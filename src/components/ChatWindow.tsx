import { useEffect, useRef } from "react"; 
import type { Message } from "../types/Message"; 
import chatbotConfig from "../config/chatbotConfig"; 
  
interface ChatWindowProps { 
  messages: Message[]; 
  isLoading: boolean; 
} 
  
function ChatWindow({ messages, isLoading }: ChatWindowProps) { 
  const bottomRef = useRef<HTMLDivElement>(null); 
  
  useEffect(() => { 
    bottomRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }, [messages]); 
  
  return ( 
    <div className="chat-window"> 
      {messages.length === 0 && ( 
        <div className="message model welcome"> 
          <strong>{chatbotConfig.botName}:</strong> 
          <p>{chatbotConfig.welcomeMessage}</p> 
        </div> 
      )} 
      {messages.map((msg, i) => ( 
        <div key={i} className={`message ${msg.role}`}> 
          <strong> 
            {msg.role === "user" ? "Anda" : chatbotConfig.botName}: 
          </strong> 
          <p>{msg.content}</p> 
        </div> 
      ))} 
      {isLoading && (
        <div className="message model typing">
          <strong>{chatbotConfig.botName}</strong>

          <div className="typing-box">
            Lagi mikir sebentar
            <span className="dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>
        </div>
      )}
      <div ref={bottomRef} /> 
    </div> 
  ); 
} 
  
export default ChatWindow; 
  
 
