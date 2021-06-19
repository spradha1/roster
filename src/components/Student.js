import React, { useState, useEffect } from 'react';
import '../styles/Student.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


function Student (props) {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [bio, setBio] = useState(props.bio);
  const [tags, updateTags] = useState(props.tags);

  // props chnage from parent
  useEffect(() => {
    setBio(props.bio);
    updateTags(props.tags);
  }, [props]);


  // call parent.addTag on releasing enter in input
  function handleEnterKeyUp (e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      props.onAddTag(props.bio.id - 1, e.target.value);
      e.target.value = '';
    }
  }

  // Average of grades
  const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);  
  let avg = bio.grades.reduce(reducer) / bio.grades.length;

  return (
    <div className="student">
      <div className="imgBox">
        <img src={bio.pic} alt="Student" />
      </div>

      <div className="infoBox">
        <div className="studentName">
          {bio.firstName.toUpperCase()} {bio.lastName.toUpperCase()}
        </div>
        <div className="otherInfo">
          <span>Email: {bio.email}</span><br/>
          <span>Company: {bio.company}</span><br/>
          <span>Skill: {bio.skill}</span><br/>
          <span>Average: {avg}%</span>
        </div>
      </div>

      <div className="toggleGrades">
        <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 
            (<FontAwesomeIcon icon={faMinus} size="2x" />) :
            (<FontAwesomeIcon icon={faPlus} size="2x" />)
          }   
        </button>
      </div>

      {isExpanded && (
        <div className="GradesView">
          {bio.grades.map((e, idx) => {
            return (
              <div key={idx}>
                Test {idx+1} &nbsp;&nbsp;&nbsp;&nbsp; {e}%
              </div>
            )
          })}
        </div>
      )}

      <div className="tags">
        {tags.map((t, idx) => {
          return (<div className="tag" key={idx}>{t}</div>)
        })}
      </div>

      <div className="add">
        <input
          type="text"
          className="addTag"
          placeholder="Add a tag"
          autoComplete="off"
          onKeyUp={ (e) => handleEnterKeyUp(e)}
        />
      </div>
    </div>
  )
}

export default Student;