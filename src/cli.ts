#!/usr/bin/env node

import { separate, showRuntimeInfo } from "./index";

async function runMain() {
  await separate(showRuntimeInfo);
}

runMain();
