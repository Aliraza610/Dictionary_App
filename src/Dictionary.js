import React , {useState} from 'react';
import axios from "axios";
import "./App.css";

const Dictionary = () => {
    const [data , setData] = useState("");
    const [searchWord , setSearchWord] = useState("");
  
  function getMeaning(){
    axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
    .then((response)=>{
    setData(response.data[0]);
    }).catch((e)=>{
      window.location = "/FourOhFour";
      console.log(e.response.data)
    });
    }
    console.log(data);
  function playAudio(){
    if(data.phonetics[0].audio === ""){
        window.location = "/nosound";
        console.log("no sound")
    }else{
        let audio =new Audio(data.phonetics[0].audio);
        audio.play();
    }
    }

  return (
    <div className='dictionary'>
        <h1>Dictionary</h1>
      <div className="searchContainer">
          <input type="text" placeholder="search..." onChange={(e)=>{setSearchWord(e.target.value)}}/>
          <button type="submit" onClick={()=>{getMeaning();}}>Submit</button>
      </div>
      {
        data && (
          <div className="showResult">
              <h2>{data.word}{""} <button onClick={()=>{playAudio()}}>🔊</button></h2>
              <h4>Parts of Speech:</h4>
              <p>{data.meanings[0].partOfSpeech}</p>
              <h4>Definition:</h4>
              <p>{data.meanings[0].definitions[0].definition}</p>
              <h4>Example:</h4>
              <p>{data.meanings[0].definitions[0].example}</p>
          </div>
        )
      }
    </div>
  )
}

export default Dictionary;