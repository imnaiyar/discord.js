import process from "node:process";
import auth from "./auth.js";
import { ShardingManager } from "../src/index.js";
'use strict';
const { token } = auth;
const sharder = new ShardingManager(`${process.cwd()}/test/shard.js`, { token, respawn: false });
sharder.on('launch', shard => console.log(`launched ${shard.id}`));
sharder.spawn();
