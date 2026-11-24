import { mkdirSync, writeFileSync } from "node:fs";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, "N", "utf8");
