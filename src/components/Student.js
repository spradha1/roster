import React, { useState } from 'react';
import '../styles/Student.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';


function Student (props) {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [bio, setBio] = useState(props.bio);

  function handleToggleButtonClick () {
    setIsExpanded(!isExpanded);
  }

  // Average of grades
  const reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);  
  let avg = bio.grades.reduce(reducer) / bio.grades.length;

  return (
    <div className="student">
      <div className="imgBox"><img src={bio.pic} alt="Student" /></div>
      <div className="infoBox">
        <div className="studentName">{bio.firstName.toUpperCase()} {bio.lastName.toUpperCase()}</div>
        <div className="otherInfo">
          <span>Email: {bio.email}</span><br/>
          <span>Company: {bio.company}</span><br/>
          <span>Skill: {bio.skill}</span><br/>
          <span>Average: {avg}%</span>
        </div>
      </div>
      <div className="toggleGrades">
        <button type="button" onClick={() => handleToggleButtonClick()}>
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
    </div>
  )
}

export default Student;