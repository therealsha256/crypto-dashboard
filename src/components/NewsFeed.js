import { useEffect, useState } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() =>{
  const axios = require("axios");

  const options = {
  method: 'GET',
  url: 'https://everything-crypto.p.rapidapi.com/v1/crypto/pricing/bitcoin/30/daily',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'everything-crypto.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  setArticles(response.data);

}).catch(function (error) {
	console.error(error);
});

  }, []);

console.log(articles);

// articles.slice(0, 7);

const first7Articles = articles?.slice(0, 7);

    return (
      <div className="news-feed">
       <h2>NewsFeed</h2>
       {first7Articles?.map((article, _index) => 
       (<div key={_index}>
        <a href={article.url}><p>{articles.title}</p></a>
        </div>))}
      </div>
    )
  };
  
  
  export default NewsFeed;