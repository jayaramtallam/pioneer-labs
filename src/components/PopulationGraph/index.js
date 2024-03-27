// PopulationGraph.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './index.css'; // Import the CSS file

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    // Fetch population data from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = await response.json();
        const jsonData = data.data.map((item, index) => ({
          id: index,
          year: item.Year,
          population: item.Population
        }));
        setPopulationData(jsonData);
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="population-graph-container">
      <div className="population-graph-content">
      <div style={{ position: 'relative' }}>
        <h2>Population Graph</h2>
        <LineChart width={700} height={300} data={populationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: 0 }}/>
          <YAxis label={{ value: 'Population', angle: -90, position: 'insideLeft', offset: -15 }}/>
          <Tooltip />
          <Legend verticalAlign="top"  />
          <Line type="monotone" dataKey="population" stroke="#00cc00" />
        </LineChart>
        </div>
        </div>
    </div>
  );
};

export default PopulationGraph;
