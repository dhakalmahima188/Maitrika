// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './.env' });

const express = require('express');
const cors = require('cors');
// get MongoDB driver connection
// const dbo = require('./db/conn');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
// app.use(require('./routes/record'));

app.use(function (err, _req, res) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// perform a database connection when the server starts
// dbo.connectToServer(function (err) {
//   if (err) {
//     console.error(err);
//     process.exit();
//   }

//   // start the Express server
//   app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
//   });
// });
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});
app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));