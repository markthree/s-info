#!/usr/bin/env node

import { separate, showProjectType, showRuntimeInfo } from "./index";

async function runMain() {
  await separate(showRuntimeInfo);
  await separate(showProjectType);
}

runMain();
