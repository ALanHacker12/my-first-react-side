
 
import React from 'react';
import {BrowserRouter,BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import {Modal} from './components/Modal/Modal'
import { Main } from './components/Main/Main';
import { Review } from './components/Review/Review';
import { Quiz} from './components/Quiz/Quiz';
import { Blog } from './components/Blog/Blog';
import {Gallery} from './components/Gallery/Gallery'
function App() {
  return (
    <div className="App">
      <header>
        

        
        <a class = "menu" href = "/" >Главная</a>
        <a class = "menu" href = "/gallery" >Галерея</a>
        <a class = "menu" href = "/products" >Продукты</a>
        <a class = "menu" href='/quiz'>Опрос</a>
        <a class = "menu" href='/login'>Регистрация</a>
      </header>
      <main>
        <BrowserRouter>
          <Routes>  
            <Route path = "/" element = {<Main/>}/>
            <Route path = "/login" element = {<Modal/>}/>
            <Route path = "/review" element = {<Review/>}/>
            <Route path = "/quiz" element = {<Quiz/>}/>
            <Route path = "/blog" element = {<Blog/>}/>
            <Route path = "/gallery" element = {<Gallery/>}/>

          </Routes>
        </BrowserRouter>


        
        </main> 
    </div>
  );
}
export default App;


