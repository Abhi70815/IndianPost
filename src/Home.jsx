import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [input, setInput] = useState(''); // Initialize input with an empty string
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleBtn = () => {
    if (input.length !== 6) { // Check the length of the input pincode
      setError("Couldn’t find the postal data you’re looking for…");
      return;
    }
    console.log(input.length);
    setError('');
    navigate('/postlist', { state: { input } });
  };

  return (
    <div className='home'>
      <h3>Enter Pincode </h3>
      <input type="number" placeholder='Pincode' onChange={(e) => setInput(e.target.value)} />
      {error !== '' && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
      <button className='btnlink' onClick={handleBtn}>Lookup</button>
    </div>
  );
};

export default Home;