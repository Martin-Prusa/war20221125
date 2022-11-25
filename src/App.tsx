import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Input } from './components/Input';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App">
      <Header>Header</Header>

      <Input placeholder='Input' />
      <Button onClick={() => {alert('a')}} text='a'>Click me</Button>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
