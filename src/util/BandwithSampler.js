const emitter = require("events").EventEmitter;
const util = require("util");

export default function BandwidthSampler(ws, interval = 2000) {
  // interval = interval || 2000;
  let previousByteCount = 0;
  // var self = this;
  const intervalId = setInterval(() => {
    const byteCount = ws.bytesReceived;
    const bytesPerSec = (byteCount - previousByteCount) / (interval / 1000);
    previousByteCount = byteCount;
    this.emit("sample", bytesPerSec);
  }, interval);
  ws.on("close", () => {
    clearInterval(intervalId);
  });
}
util.inherits(BandwidthSampler, emitter);
