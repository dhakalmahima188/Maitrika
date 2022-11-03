const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT_SOCKET = process.env.PORT || 5000;
let data = {
  "doc": "",
  "pat": ""
}

io.on("connection", (socket) => {
	// socket.emit("me", socket.id);
  console.log("Connected")

  socket.on("pat", (id) => {
    data['pat'] = id
    if (data["doc"] != "" && data["pat"] != ""){
      console.log("emit time")
      socket.broadcast.emit("ready", data)
    }
    console.log(data)
  })

  socket.on("doc", (id) => {
    data['doc'] = id
    if (data["doc"] != "" && data["pat"] != ""){
      console.log("emit time")
      
      socket.broadcast.emit("ready", data)
    }
    console.log(data)
  })

});


server.listen(PORT_SOCKET, () => console.log(`Server is running on port ${PORT_SOCKET}`));
