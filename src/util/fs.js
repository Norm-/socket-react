const path = require("path");
const util = require("util");
const fs = require("fs");

export function makePathForFile(filePath, prefix, cb) {
  if (typeof cb !== "function") throw new Error("callback is required");
  const normalizedPath = path.dirname(path.normalize(filePath)).replace(/^(\/|\\)+/, "");
  const pieces = normalizedPath.split(/(\\|\/)/);
  const incrementalPath = prefix;
  function step(error) {
    if (error) return cb(error);
    if (pieces.length === 0) return cb(null, incrementalPath);
    incrementalPath += "/" + pieces.shift();
    fs.exists(incrementalPath, exists => {
      if (!exists) fs.mkdir(incrementalPath, step);
      else process.nextTick(step);
    });
  }
  step();
}
