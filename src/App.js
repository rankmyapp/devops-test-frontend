import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import axios from 'axios'

function App() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchMessage() {
      const { data } = await axios.get(process.env.REACT_APP_API_URL);

      setMessage(data);
      setLoading(false);
    }

    fetchMessage();
  }, []);

  return (
    <div className="App">
      <Helmet>
        <title>RankMyApp</title>
      </Helmet>

      {loading && 'Loading...'}
      {!loading && message}
    </div>
  );
}

export default App;
