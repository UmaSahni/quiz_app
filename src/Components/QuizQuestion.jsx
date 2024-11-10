import React, { useContext, useEffect, useState } from "react";
import { user } from "../Context/UserContext";
import "../index.scss";
import { useNavigate } from "react-router-dom";

const QuizQuestion = () => {
  const { state, dispatch } = useContext(user);
  const [que, setQue] = useState(0);
  const [solved, setSolved] = useState({disableSelection: false});
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  

  const handleCheckAns = (selectedAns) => {
    console.log(selectedAns)
    const correctAns =  selectedAns === state.allQuestion[que].correct_answer;
    correctAns ? dispatch({type:"CORRECT"}): dispatch({type:"WRONG"})
   setSolved({answer:selectedAns, correctAns,  disableSelection: true,})
};

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Get random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
  }
  return arr;
}


useEffect(()=>{
    const ansArray = [
        ...state.allQuestion[que].incorrect_answers,
        state.allQuestion[que].correct_answer,
      ];
      setShuffledAnswers(shuffleArray(ansArray));
      
      setSolved({disableSelection: false}); // Reset the solved state on question change
     
      // console.log(shuffleArray(ansArray));
},[que, state.allQuestion])

const navigate = useNavigate("")

console.log(state)
  return (
    <div className="quiz-container">
      
      <div>{que+1}. {state.allQuestion[que].question}</div>

      <div>
        <ul>
          {shuffledAnswers?.map((el, i) => (
            <li
              style={{
                backgroundColor : 
                solved.answer === el ?
                solved.correctAns ? "green" : "red"
                : "transparent",

                color: solved.answer === el ? "white" : "#b3b0b0",
                cursor: solved.disableSelection ? "not-allowed" : "pointer",
              }}
              onClick={() =>{  if (!solved.disableSelection) handleCheckAns(el); }}
              key={el}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>

    {
      que < state.allQuestion.length-1?
      <button
      disabled={que === state.allQuestion.length - 1}
      onClick={() => setQue(que + 1)}
    >
      Next
    </button>
    :
   <button onClick={()=>navigate("/result")} >Result</button>
    }
  
      
      {/* <button disabled={que === 0} onClick={() => setQue(que - 1)}>
        pre
      </button> */}
    </div>
  );
};

export default QuizQuestion;
