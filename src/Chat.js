import React, { useState, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handleUserMessage = (e) => {
    e.preventDefault();
    const messageText = inputRef.current.value.trim();
    if (messageText === '') return;

    const newUserMessage = {
      author: 'user',
      text: messageText
    };

    // Add user's message to state
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    // Clear the input field
    inputRef.current.value = '';

    // Simulate bot response after a short delay (mocking async behavior)
    setTimeout(() => {
      handleBotMessage(messageText);
    }, 500);
  };

  const handleBotMessage = (userMessage) => {
    const botResponse = getBotResponse(userMessage);
    const newBotMessage = {
      author: 'bot',
      text: botResponse
    };

    // Add bot's response to state
    setMessages((prevMessages) => [...prevMessages, newBotMessage]);
  };

  const getBotResponse = (userMessage) => {
    // Define your bot's responses based on user input (simple mock)
    switch (userMessage.toLowerCase()) {
      case 'hello':
        return 'Hi there!';
      case 'how are you?':
        return 'I am just a mock bot, but thanks for asking!';
      case 'services':
        return 'Sure! We offer a range of services including...';
      case 'help':
        return 'How can I assist you today?';
      case 'what is your name?':
        return 'I am Chatbot, your virtual assistant.';
      case 'bye':
        return 'Goodbye!';
      case 'thank you':
        return 'You\'re welcome!';
      case 'what can you do?':
        return 'I can provide information and assistance. Try asking about our services!';
      case 'tell me a joke':
        return 'Why don\'t scientists trust atoms? Because they make up everything!';
      case 'what\'s the weather like today?':
        return 'Checking the weather...';
      case 'order pizza':
        return 'I can help you order pizza. What toppings would you like?';
      case 'how old are you?':
        return 'Age is just a number for bots!';
      case 'tell me about yourself':
        return 'I\'m a chatbot created to assist you. Ask me anything!';
      case 'who created you?':
        return 'I was created by talented developers.';
      case 'how can I contact support?':
        return 'You can reach support through our website.';
      case 'where are you located?':
        return 'I exist in the digital realm!';
      case 'what languages do you speak?':
        return 'I speak many programming languages!';
      case 'tell me a fun fact':
        return 'Did you know that honey never spoils?';
      case 'can you do math?':
        return 'I can perform basic calculations!';
      case 'show me your features':
        return 'I can chat, respond to queries, and more. What would you like to do?';
      default:
        return "I'm sorry, I don't understand that.";
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.author}`}>
            <span className="message-text">{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleUserMessage} className="message-form">
        <input
          ref={inputRef}
          type="text"
          placeholder="Type your message..."
          className="message-input"
        />
      </form>
    </div>
  );
};

export default Chatbot;
