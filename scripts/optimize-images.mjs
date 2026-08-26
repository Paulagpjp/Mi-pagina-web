/**
 * Optimiza las imágenes de /public: pasa JPG/PNG a WebP, limita el ancho máximo
 * y saca una variante estrecha de los retratos para que el móvil no descargue
 * la versión de escritorio. Es idempotente: se puede correr las veces que sea.
 *
 *   npm run optimize:images
 *
 * og.jpg se deja fuera a propósito: WhatsApp, LinkedIn y X quieren JPG/PNG.
 */
import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const PUBLIC = "public";
const MAX_WIDTH = 1600;         // capturas y galerías
const MAX_WIDTH_PORTRAIT = 900; // retratos verticales
const NARROW = 640;             // variante móvil del retrato
const EXCLUDE = new Set(["og.jpg"]);

const kb = (n) => `${Math.round(n / 1024)} KB`;
const isNarrowVariant = (f) => new RegExp(`-${NARROW}\\.webp$`).test(f);

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    out.push(...(entry.isDirectory() ? await walk(full) : [full]));
  }
  return out;
}

const files = await walk(PUBLIC);
let saved = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) continue;
  if (EXCLUDE.has(path.basename(file))) continue;
  if (isNarrowVariant(file)) continue; // es una salida, no una fuente

  const meta = await sharp(file).metadata();
  const portrait = meta.height > meta.width;
  const cap = portrait ? MAX_WIDTH_PORTRAIT : MAX_WIDTH;
  const target = file.replace(/\.(jpe?g|png|webp)$/i, ".webp");
  const width = Math.min(meta.width, cap);

  // 1) Imagen principal: convertir a webp y/o reducir si excede el ancho tope.
  if (ext !== ".webp" || meta.width > cap) {
    const before = (await stat(file)).size;
    const buf = await sharp(file)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toBuffer();

    // No empeorar: si el webp pesa más que un original ya optimizado, se deja.
    if (ext === ".webp" && buf.length >= before) {
      console.log(`${file}  sin cambios (el original ya pesa menos)`);
    } else {
      await sharp(buf).toFile(target);
      if (ext !== ".webp" && existsSync(file) && file !== target) await unlink(file);
      saved += before - buf.length;
      console.log(`${file} → ${target}  ${kb(before)} → ${kb(buf.length)}`);
    }
  }

  // 2) Variante estrecha del retrato, para el srcset del hero.
  if (portrait && width > NARROW) {
    const narrow = target.replace(/\.webp$/, `-${NARROW}.webp`);
    const source = existsSync(target) ? target : file;
    await sharp(source).resize({ width: NARROW }).webp({ quality: 82, effort: 6 }).toFile(narrow);
    console.log(`   ↳ ${narrow}  ${kb((await stat(narrow)).size)}`);
  }
}

console.log(saved > 0 ? `\nAhorro total: ${kb(saved)}` : "\nImágenes al día.");
