import { cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  console.warn("Standalone output was not found. Skipping asset copy.");
  process.exit(0);
}

const staticSource = path.join(root, ".next", "static");
const staticTarget = path.join(standaloneDir, ".next", "static");
const publicSource = path.join(root, "public");
const publicTarget = path.join(standaloneDir, "public");

if (existsSync(staticSource)) {
  await mkdir(path.dirname(staticTarget), { recursive: true });
  await cp(staticSource, staticTarget, { recursive: true, force: true });
}

if (existsSync(publicSource)) {
  await cp(publicSource, publicTarget, { recursive: true, force: true });
}
