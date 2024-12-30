import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://jsonplaceholder.typicode.com/posts', { signal })
      .then((res) => res.json())
      .then((data) => setData(data));

    // Cleanup function
    return () => {
      controller.abort();
    };
  }, []); // Add empty dependency array to prevent infinite re-fetching

  return (
    <div>
      {data.length == 0 ? "loading..." : <p>Data is not empty!</p>}
      {data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      })}
    </div>
  );
};

export default App;
