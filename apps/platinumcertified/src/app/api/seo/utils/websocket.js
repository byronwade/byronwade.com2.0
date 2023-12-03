// utils/websocket.js
import { Server } from "ws";

let wss;

export function createWebSocketServer(server) {
	wss = new Server({ server, path: "/api/ws" });

	wss.on("connection", (ws) => {
		console.log("Client connected");

		ws.on("close", () => {
			console.log("Client disconnected");
		});
	});
}

export function sendProgress(progress) {
	wss.clients.forEach((client) => {
		client.send(JSON.stringify({ progress }));
	});
}
