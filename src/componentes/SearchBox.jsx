import React, { useState } from 'react';
import GoogleLogo from './GoogleLogo';
import InputBox from './InputBox';
import Buttons from './Buttons';
import Message from './Message';
import './SearchBox.css';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();

      const results = data.filter(post =>
        post.title.toLowerCase().includes(inputValue.toLowerCase())
      );

      if (results.length > 0) {
        setMessage(`🔎 Encontrado: ${results[0].title}`);
      } else {
        setMessage('Nenhum post encontrado com esse termo.');
      }
    } catch (error) {
      setMessage('Erro ao buscar os dados.');
    }
  };

  const handleSearchGoogle = () => {
    if (inputValue.trim()) {
      fetchPosts();
    } else {
      setMessage('Digite algo para buscar...');
    }
  };

  const handleLuckySearch = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      const randomPost = data[Math.floor(Math.random() * data.length)];
      setMessage(`🍀 Post aleatório: ${randomPost.title}`);
    } catch (error) {
      setMessage('Erro ao buscar dados aleatórios.');
    }
  };

  return (
    
    <div className="search-container">
      <GoogleLogo />
      <InputBox value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Message text={message} />
      <Buttons onSearch={handleSearchGoogle} onLucky={handleLuckySearch} />
    </div>
  );
};

export default SearchBox;
