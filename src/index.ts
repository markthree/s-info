import { version } from "process";
import { createConsola } from "consola";
import { lightGreen } from "kolorist";
import { version as osVersion } from "os";

const logger = createConsola().withTag("s-info");

export function showRuntimeInfo() {
  logger.log(`node: ${lightGreen(version)}`);
  logger.log(
    `platform: ${lightGreen(osVersion())}`,
  );
}

export async function separate(fn: () => void) {
  console.log();
  await fn();
  console.log();
}
