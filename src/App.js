import React, { useState, useEffect } from 'react';
import Student from './components/Student';
import './App.css';
import { getStudents, filterStudents } from './services/functions';


function App () {

  const [data, updateData] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchTag, setSearchTag] = useState('');
  const [isLoading, setIsLoading] = useState(true);


  // initially, get student data & attach tag attribute 
  useEffect (() => {
    let mounted = true;

    getStudents().then((data) => {
      if (mounted) {
        data.forEach((e) => e.tags = []);
        updateData(data);
        setIsLoading(false);
      }
    });

    return () => mounted = false;
  }, []);


  // add a tag to a student
  function addTag (key, value) {
    let newdata = [];
    for (let i=0; i<data.length; i++) {
      if (i === key)
        data[i].tags.push(value);
      newdata.push(data[i]);
    }
    updateData(newdata);
  }

  // query field values change
  function handleSearchQueryChange (action, query) {
    if (action === 'name') {
      setSearchName(query);
    }
    else if (action === 'tag') {
      setSearchTag(query);
    }
  }

  
  if (isLoading) {
    return <>Loading ...</>
  }


  // filter data by search queries for name and tag
  const filteredData = filterStudents(data, searchName, searchTag);

  return (
    <div className="App">
      <div className="container">

        <div id="search">
          <input 
            type="text"
            id="searchName"
            placeholder="Search by name"
            autoComplete="off"
            onChange={ (e) => handleSearchQueryChange('name', e.target.value) }
          />
          <input
            type="text"
            id="searchTag"
            placeholder="Search by tag"
            autoComplete="off"
            onChange={ (e) => handleSearchQueryChange('tag', e.target.value) }
          />
        </div>
        <div id="studentsContainer">
          {filteredData.map((e) => {
            return (
              <Student 
                bio={e}
                tags={e.tags}
                key={e.id}
                onAddTag={addTag}
              />
            )
          })}
        </div>

      </div>
    </div>
  );
}


export default App;
