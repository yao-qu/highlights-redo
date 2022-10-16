import { useEffect, useState } from "react";
import { IoIosSearch } from 'react-icons/io';
import CardComp from "./CardComp";
// import './App.css';
// const API_URL = 'https://yxruy9.deta.dev/author/'


function App() {

  const [quotes, setQuotes] = useState([]);

  const getHighlights = async (author) => {
    // const response = await fetch(`https://yxruy9.deta.dev/author/${author}`);
    const response = await fetch(`https://yxruy9.deta.dev/highlight`);
    const data = await response.json();
    console.log(data)
    setQuotes(data.Data);
  };

  useEffect(() => {
    getHighlights();
  }, []);

  return (
    <div className="app">
      <h1>Hello World</h1>

      <div className="search">
        <input placeholder="search author" value="baek" onChange={() => { }}></input>
        <IoIosSearch onClick={() => { }} />
      </div>

      {
        quotes?.length > 0
          ? (
            <div className="container">
              {quotes.map((q) => (
                <CardComp quote={q} key={q.id} />
              ))}
            </div>
          ) :
          (
            <div className="empty"><h2>Author not found</h2></div>
          )
      }



    </div>
  );
}

export default App;
