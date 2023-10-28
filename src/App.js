import React, {useEffect, useState} from 'react';
import './App.css';
import Tweet from "./Tweet";
import axios from "axios";

function App() {

  const [data, setData] = useState([]);

  const fetchTweets = async () => {
    try {
      const response = await axios.get('https://coursera-twitter-api.herokuapp.com/tweets');
      setData(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTweets().then(r => console.log(r));
  })

  return (
    <div>
        {data.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
    </div>
  );
}

export default App;
