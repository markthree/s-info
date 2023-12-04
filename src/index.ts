import { existsSync } from "fs";
import { version } from "process";
import { lightGreen } from "kolorist";
import { createConsola } from "consola";
import { version as osVersion } from "os";
import { join } from "path";

const logger = createConsola().withTag("s-info");

export function showRuntimeInfo() {
  logger.log(`node: ${lightGreen(version)}`);
  logger.log(
    `platform: ${lightGreen(osVersion())}`,
  );
}

export const CONFIG_FILE_SUFFIX = [
  ".js",
  ".mjs",
  ".ts",
  ".cjs",
  ".mts",
  ".cts",
];

export async function showProjectType() {
  for (const SUFFIX of CONFIG_FILE_SUFFIX) {
    if (existsSync(join("vite.config", SUFFIX))) {
      logger.log(
        `type: ${lightGreen("vite")}`,
      );
      return;
    }

    if (existsSync(join("nuxt.config", SUFFIX))) {
      logger.log(
        `type: ${lightGreen("nuxt")}`,
      );
      return;
    }
  }
}

export async function separate(fn: () => void) {
  console.log();
  await fn();
  console.log();
}
