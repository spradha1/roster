import React, { useState, useEffect } from 'react';
import './App.css';
import { getStudents } from './services/students';


function App () {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    let mounted = true;

    getStudents().then((data) => {
      if (mounted) {
        setData(data);
        setIsLoading(false);
      }
    });

    return () => mounted = false;
  }, []);


  if (isLoading) {
    return <>Loading ...</>
  }


  return (
    <div className="App">
      {data.map((e, idx) => {
        // Average of grades
        const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);  
        let avg = e.grades.reduce(reducer) / e.grades.length;
        return (
          <div key={idx}>
            <img src={e.pic} alt="Student" /><br/>
            <strong>{e.firstName} {e.lastName}</strong><br/>
            <span>Email: {e.email}</span><br/>
            <span>Company: {e.company}</span><br/>
            <span>Skill: {e.skill}</span><br/>
            <span>Average: {avg}%</span>
          </div>
        )
      })}
    </div>
  );
}


export default App;
