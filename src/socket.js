module.exports = function onConnect(numClients, socket) {
  numClients++;
  socket.emit("stats", { stats: numClients });

  console.log("Connected clients:", numClients);

  socket.on("disconnect", function() {
  numClients--;
    socket.emit("stats", { numClients: numClients });

     console.log("Connected clients:", numClients);
  });
  console.log(arguments);
 }
