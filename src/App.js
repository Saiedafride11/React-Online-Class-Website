import React from 'react';
import logo from './logo.svg';
import './App.css';

import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <Courses></Courses>
      <Footer></Footer>
    </div>
  );
}

export default App;
