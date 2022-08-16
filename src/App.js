import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      // console.log(res.data.slip.advice);
      setAdvice(res.data.slip.advice);
      // return res.data.slip.advice;
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="app">
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <div className="card">
          <h1 className="heading">"{advice}"</h1>
          <button className="button" onClick={fetchAdvice}>
            <span>Generate</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
