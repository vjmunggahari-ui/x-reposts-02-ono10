// x-reposts-02 entry bot — copies POSTS.json from the bot dir to the output dir.
// Run by the grader as: node /bot/main.ts  (Node 22+)
// MAKEFUN_BOT_DIR: where POSTS.json lives (default '/bot').
// MAKEFUN_OUTPUT_DIR: where POSTS.json must be written. REQUIRED — no fallback.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR;
if (!OUT_DIR) {
  throw new Error('MAKEFUN_OUTPUT_DIR is not set');
}

const src = join(BOT_DIR, 'POSTS.json');
const raw = readFileSync(src, 'utf8');
mkdirSync(OUT_DIR, { recursive: true });
const dest = join(OUT_DIR, 'POSTS.json');
writeFileSync(dest, raw);

// Self-check (revision): read the copy back and verify it.
//  - byte-identical to the source
//  - valid JSON with a "posts" array
//  - every entry an https://x.com/<handle>/status/<id> URL
//  - at most 15 entries (competition cap)
// An empty list is a PLACEHOLDER: it warns but does not fail, because the
// real post URLs are filled in later by the parent. A submitted entry must
// carry 1-15 URLs; the parent enforces that floor at submit time.
const back = readFileSync(dest, 'utf8');
if (back !== raw) {
  throw new Error('self-check failed: copied POSTS.json is not byte-identical to the source');
}
let parsed;
try {
  parsed = JSON.parse(back);
} catch {
  throw new Error('self-check failed: copied POSTS.json is not valid JSON');
}
if (!parsed || !Array.isArray(parsed.posts)) {
  throw new Error('self-check failed: POSTS.json must be {"posts": [...]}');
}
if (parsed.posts.length > 15) {
  throw new Error(`self-check failed: ${parsed.posts.length} posts, competition cap is 15`);
}
const URL_RE = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/;
for (const url of parsed.posts) {
  if (typeof url !== 'string' || !URL_RE.test(url)) {
    throw new Error(`self-check failed: not a valid X post URL: ${String(url)}`);
  }
}
if (parsed.posts.length === 0) {
  console.warn('PLACEHOLDER: posts list is empty — fill 1-15 real post URLs before submitting');
} else {
  console.log(`self-check passed: ${parsed.posts.length} post URL(s), byte-identical copy`);
}
console.log(`copied POSTS.json from ${src} to ${dest}`);
