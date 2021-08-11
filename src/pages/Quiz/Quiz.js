import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import "./Quiz.css";
const Quiz = ({ name, data, score, setScore }) => {
  const [currQues, setCurrQues] = useState(0);
  const [selected, setSelected] = useState();
  const [options, setOptions] = useState();
  console.log(data);

  const correct = data && data[currQues]?.correct_answer;
  const incorrect = data && data[currQues]?.incorrect_answers;
  const history = useHistory();

  const handleCheck = (item) => {

    if (selected === item && selected === correct) {
      return "correct";
    } else if (selected === item && selected !== correct) {
      return "wrong";
    } else if (item === correct) {
      return "correct";
    }
  };

   useEffect(() => {
     setOptions(
       data &&
         handleShuffle([
           data[currQues]?.correct_answer,
           ...data[currQues]?.incorrect_answers,
         ])
     );
   }, [currQues, data]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  const handlePick = (item) => {
    setSelected(item);
    if(item===correct){
        setScore(score+1)
    }
  };

  const handleNext = () => {
   if (currQues > 8) {
     history.push("/result");
    
   } else {
     setCurrQues(currQues + 1);
   }
   setSelected();
  };

  
  return (
    <>
      <div className="main">
        <div className="quiz">
          <h1>Name:{name ? name : " Enter Name in home page "},</h1>

          <h1>Score:{score}</h1>
        </div>
        <div className="content">
          <div className="question">
            <h1>{currQues+1}. {data && data[currQues].question}</h1>
          </div>
          <div className="answer">
            {options &&
              options.map((item) => {
                return (
                  <button
                    key={item}
                    className={`button ${selected && handleCheck(item)}`}
                    variant="contained"
                    onClick={() => handlePick(item)}
                    disabled={selected}
                  >
                    {item}
                  </button>
                );
              })}
          </div>
          <div className="next">
            <Link to="/"><button className="nextBtn">Quit Quiz</button></Link>
            <button className="nextBtn" onClick={handleNext}>
              Next Question
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
