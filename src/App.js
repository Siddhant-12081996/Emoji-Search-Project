import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {useEffect} from 'react';
import EmojiData from './components/Db.json';
function App() {
  const [search,setSearch]=useState('');
   const [data,setData] =useState([])

   useEffect(()=>{
 //console.log(search);
 const newData =EmojiData.filter(emoji=>emoji.title.toLowerCase().includes(search.toLowerCase()))
 setData(newData);
  },[search])
  return (
    <div>
      <center>
        <h1>Emoji Search</h1>
        <input type={"text"} name={"search"} value={search} onChange={(event)=>setSearch(event.target.value)}/>
      </center>
       {/* {EmojiData.map(emoji=> <li>{emoji.symbol} {emoji.title}</li>)} */}

       {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);}}>
            {emoji.symbol} {emoji.title}
          </div>
        </div>
        )}

       </div>
  );
}

export default App;
