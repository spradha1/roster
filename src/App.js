import React, { useState, useEffect } from 'react';
import Student from './components/Student';
import './App.css';
import { getStudents, filterStudents } from './services/students';


function App () {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get student data once
  useEffect (() => {
    let mounted = true;

    getStudents().then((data) => {
      if (mounted) {
        setData(data);
        setFilteredData(data);
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

        <div id="searchName">
          <input 
            type="text"
            id="searchNameInput"
            placeholder="Search by name"
            onChange={ (e) => setFilteredData(filterStudents(data, e.target.value, "")) }
          />
        </div>
        <div id="studentsContainer">
          {filteredData.map((e, idx) => {
            return (
              <Student bio={e} key={idx} />
            )
          })}
        </div>

      </div>
    </div>
  );
}


export default App;
