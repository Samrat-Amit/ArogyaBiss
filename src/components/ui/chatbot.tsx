
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{text: string, sender: 'user' | 'bot'}[]>([
    {
      text: 'Would you like to start your healing journey today?',
      sender: 'bot'
    }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    setChatHistory([...chatHistory, { text: message, sender: 'user' }]);
    setMessage('');

    // Simulate bot response after a small delay
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev, 
        { 
          text: "Thank you for reaching out. Mr. Samrat will connect with you shortly. You can also book a free 15-minute consultation by clicking the 'Book Now' button.", 
          sender: 'bot' 
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-20 right-4 z-40 float-button bg-arogya-aqua hover:bg-arogya-aqua-dark"
        aria-label="Chat with us"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </button>
      
      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 right-4 w-80 md:w-96 bg-white rounded-2xl shadow-xl z-40 overflow-hidden transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat Header */}
        <div className="bg-arogya-teal p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="rounded-full bg-white/30 w-8 h-8 flex items-center justify-center mr-3">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white font-medium">Arogya Bliss Support</h3>
          </div>
          <button 
            onClick={toggleChat} 
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Chat Messages */}
        <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3">
          {chatHistory.map((chat, index) => (
            <div 
              key={index} 
              className={`${
                chat.sender === 'user' 
                  ? 'bg-arogya-aqua/10 ml-auto' 
                  : 'bg-gray-100 mr-auto'
              } rounded-lg p-3 max-w-[80%]`}
            >
              {chat.text}
            </div>
          ))}
        </div>
        
        {/* Chat Input */}
        <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex">
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..." 
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-arogya-teal"
          />
          <button 
            type="submit"
            className="bg-arogya-teal text-white px-4 py-2 rounded-r-md hover:bg-arogya-teal-dark transition-colors"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
