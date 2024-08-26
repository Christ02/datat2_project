// src/components/HealthDataEntry.js
import React, { useState } from 'react';
import { registerHealthData } from '../services/api';


function HealthDataEntry() {
  const [calories, setCalories] = useState('');

  const handleSubmit = async () => {
    try {
      await registerHealthData({ calories });
      alert('Data registered successfully');
    } catch (error) {
      alert('Error registering data');
    }
  };

  return (
    <div>
      <h1>Enter Health Data</h1>
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        placeholder="Calories"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default HealthDataEntry;
