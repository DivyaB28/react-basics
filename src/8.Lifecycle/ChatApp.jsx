import React, { useEffect, useState } from "react";
const serverURL = "http://localhost:5173/";

function createConnection(serverURL, roomId) {
  return {
    connect() {
      console.log(
        "✅ Connecting to " + roomId + " room at" + serverURL + "..."
      );
    },
    disconnect(roomId) {
      console.log(
        "❌ Disconnecting from " + roomId + " room at" + serverURL + "..."
      );
    },
  };
}

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverURL, roomId);
    connection.connect();
    return () => connection.disconnect(roomId);
  }, [roomId]);
  return <h5>Welcome to the {roomId} room!</h5>;
}

function ChatApp() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState("false");
  return (
    <div>
      <label>
        Choose the chat room:
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">General</option>
          <option value="travel">Travel</option>
          <option value="music">Music</option>
        </select>
      </label>
      <button onClick={(e) => setShow(!show)}>
        {show ? "Close Chat" : "Open Chat"}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}

export default ChatApp;
