import React from 'react'
import { useState } from "react";

const dummyConversations = [
  {
    id: 1,
    name: "John Doe",
    messages: [
      { from: "me", text: "Hi John!" },
      { from: "John", text: "Hey! How are you?" },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    messages: [
      { from: "me", text: "Hello Jane!" },
      { from: "Jane", text: "Hi there!" },
    ],
  },
];

const MyMessages = () => {
  const [selectedId, setSelectedId] = useState(dummyConversations[0].id);
  const [newMessage, setNewMessage] = useState("");

  const selectedConversation = dummyConversations.find(
    (c) => c.id === selectedId
  );

  const handleSend = () => {
    if (!newMessage.trim()) return;

    selectedConversation.messages.push({ from: "me", text: newMessage });
    setNewMessage("");
  };

  return (
    <div className="h-screen flex bg-[#112211] text-white">
      {/* Sidebar */}
      <div className="w-1/3 bg-[#1a2a1a] p-4 overflow-y-auto border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">Conversations</h2>
        {dummyConversations.map((conv) => (
          <div
            key={conv.id}
            className={`p-3 rounded-xl cursor-pointer mb-2 ${
              selectedId === conv.id
                ? "bg-green-700"
                : "hover:bg-green-900 transition"
            }`}
            onClick={() => setSelectedId(conv.id)}
          >
            {conv.name}
          </div>
        ))}
      </div>

      {/* Messages Panel */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <h3 className="text-2xl font-semibold mb-4">
            Chat with {selectedConversation.name}
          </h3>
          {selectedConversation.messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl max-w-[70%] ${
                msg.from === "me"
                  ? "bg-green-600 self-end text-right"
                  : "bg-gray-800 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700 flex items-center gap-4 bg-[#1a2a1a]">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl bg-gray-900 text-white border-none outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-green-600 px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyMessages;
