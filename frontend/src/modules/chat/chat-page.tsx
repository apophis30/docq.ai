"use client";
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

type Message = {
  role: "user" | "ai";
  content: string;
  file?: File;
  fileUrl?: string;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", content: "<Start>" },
  ]);
  const [isPending, setIsPending] = useState(false);
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    setSelectedFile(file);

    // Create a preview URL for images
    if (file.type.startsWith("image/")) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() && !selectedFile) return;

    setIsPending(true);
    let fileUrl = "";

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/files/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        fileUrl = data.url; // URL returned by the server
      } catch (error) {
        console.error("File upload failed:", error);
        setIsPending(false);
        return;
      }
    }

    const newMessage: Message = {
      role: "user",
      content: input,
      ...(fileUrl && { fileUrl }), // Add fileUrl only if it exists
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const aiResponse = await fetch("http://localhost:8000/api/v1/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, fileUrl }),
      });

      const data = await aiResponse.json();
      const aiMessage: Message = {
        role: "ai",
        content: data.reply || "I couldn't generate a response.",
      };

      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("AI response failed:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "ai",
          content: "Oops! Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsPending(false);
      setInput("");
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Messages Container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-l from-slate-900 via-stone-800 to-slate-900 dark:bg-gray-900"
      >
        {messages.map((msg, index) => (
          <Card
            key={index}
            className={`max-w-xs ${
              msg.role === "user" ? "ml-auto" : "mr-auto"
            }`}
          >
            <CardContent className="p-3">
              {msg.content}
              {msg.fileUrl && (
                <div className="mt-2">
                  {msg.fileUrl.endsWith(".pdf") ? (
                    <a
                      href={msg.fileUrl}
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      📄 View PDF
                    </a>
                  ) : msg.fileUrl.match(/\.(jpeg|jpg|png|gif)$/) ? (
                    <Image
                      src={msg.fileUrl}
                      alt="Uploaded Image"
                      width={32}
                      height={32}
                      className="rounded-lg"
                    />
                  ) : (
                    <a
                      href={msg.fileUrl}
                      target="_blank"
                      className="text-blue-500 underline"
                    >
                      📎 Download File
                    </a>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chat Input & File Upload */}
      <div className="p-4 border-t flex flex-col bg-white dark:bg-gray-800">
        {/* File Preview Section */}
        {previewUrl && (
          <div className="mb-2 flex items-center space-x-2">
            <Image
              src={previewUrl}
              alt="Preview"
              width={16}
              height={16}
              className="rounded-lg border"
            />
            <span className="text-gray-600 dark:text-gray-300">
              {selectedFile?.name}
            </span>
          </div>
        )}

        {/* Input Row */}
        <div className="flex items-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="mr-2 cursor-pointer text-blue-500"
          >
            📎 Attach
          </label>

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 mr-2"
          />

          {isPending ? (
            <div className="w-6 h-6 border-t-2 border-b-2 border-gray-800 rounded-full animate-spin" />
          ) : (
            <Button
              onClick={sendMessage}
              disabled={!input.trim() && !selectedFile}
            >
              Send
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
