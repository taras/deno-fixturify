import { existsSync } from 'node:fs';

export function removeTestDir() {
  if (existsSync("testdir.tmp")) {
    Deno.removeSync("testdir.tmp", { recursive: true });
  }
}
