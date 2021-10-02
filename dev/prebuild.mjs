import fs from "fs/promises";

const cwd = process.cwd();
await Promise.all([
  fs.rmdir(`${cwd}/cjs`, { recursive: true }),
  fs.rmdir(`${cwd}/dist`, { recursive: true }),
  fs.rmdir(`${cwd}/dist`, { recursive: true }),
  fs.rmdir(`${cwd}/es`, { recursive: true }),
  fs.rmdir(`${cwd}/esm`, { recursive: true }),
  fs.rmdir(`${cwd}/type`, { recursive: true }),
  fs.rmdir(`${cwd}/umd`, { recursive: true }),
  fs.rm(`${cwd}/sugar.js`),
  fs.rm(`${cwd}/sugar.mjs`),
]);
