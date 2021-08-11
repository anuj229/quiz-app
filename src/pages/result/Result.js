import { Link } from 'react-router-dom';
import React from 'react'
import './Result.css'
const Result = ({score}) => {
    return (
      <div className="result">
        <h1>👏</h1>
        <h1>Result</h1>
        <h1>Your Score is : 0{score}/10</h1>
        <Link to="/"><button className="start-btn">Start Again</button></Link>
      </div>
    );
}

export default Result
