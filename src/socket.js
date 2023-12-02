import { io } from "socket.io-client";
// const dotenv = require('dotenv').config();
export const initSocket = async () => {
  const options = {
    "force new connection": true,
    reconnectionAttempt: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  return io('http://localhost:5000', options);
};
