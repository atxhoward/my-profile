import { spawnSync } from "node:child_process";

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: process.platform === "win32",
    env: process.env,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("[vercel-build] Running database migrations...");
run("npm", ["run", "db:migrate"]);

console.log("[vercel-build] Running seed...");
run("npm", ["run", "db:seed"]);

console.log("[vercel-build] Building Next.js app...");
run("npm", ["run", "build"]);
