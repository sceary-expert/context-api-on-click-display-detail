// ApiContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return <ApiContext.Provider value={{ posts }}>{children}</ApiContext.Provider>;
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export { ApiProvider, useApi };
