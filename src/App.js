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
      <div className="container">
        {data.map((e, idx) => {
          // Average of grades
          const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);  
          let avg = e.grades.reduce(reducer) / e.grades.length;
          return (
            <div className="student" key={idx}>
              <div className="imgBox"><img src={e.pic} alt="Student" /></div>
              <div className="infoBox">
                <div className="studentName">{e.firstName.toUpperCase()} {e.lastName.toUpperCase()}</div>
                <div className="otherInfo">
                  <span>Email: {e.email}</span><br/>
                  <span>Company: {e.company}</span><br/>
                  <span>Skill: {e.skill}</span><br/>
                  <span>Average: {avg}%</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default App;
