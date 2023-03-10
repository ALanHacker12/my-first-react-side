import {React,useState } from 'react';
import './Gallery.scss';
import { useEffect } from 'react';
import {Collection} from './Collection.jsx';

export const Gallery = () =>{
    const cats = [
        {"name": "все"},
        {"name": "мемы"},
        {"name": "роблокс"},
        {"name": "дота"},
    ]
const [categoryId,setCategoryId] = useState(0);
const [searchValue, setSearchValue] = useState('');
const [collections, setCollections] =useState([]);
 
useEffect(()=>{
    fetch(`https://638319706e6c83b7a98bca14.mockapi.io/negra?${
        categoryId ? `category=${categoryId}` : '' }`,
        console.log(categoryId)
    )
    .then((res)=> res.json())
    .then((json) => {
        setCollections(json);
       
    })
    .catch((err)=>{
        console.warn(err);
     
        alert('ошибка')
    });
}, [categoryId]);

return (
    <div className="Gallery">
      <h1>Наша галерея</h1>
      <div className="top">

   <ul className="tags">
         {cats.map((obj, i)=>(
            <li
            onClick = {()=> setCategoryId(i)}
            className={categoryId===i? 'active':''}
            key = {obj.name}>
                {obj.name}
            </li>
         ))}
        </ul> 



      
        <input value = {searchValue}                        
         onChange={e => setSearchValue(e.target.value)} 
         className="search-input" 
         placeholder="Поиск по названию" 
         />

      </div>
      <div className="content">


      {collections                                                                 
        .filter((obj)=> obj.name.toLowerCase().includes(searchValue.toLowerCase()))
        .map((obj, index)=>(
            <Collection key ={index} name ={obj.name} images = {obj.photos}/>
        ))}



      </div>
    </div>
  );
}

 




      