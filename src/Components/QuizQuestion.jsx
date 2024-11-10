import React, { useContext, useEffect, useState } from "react";
import { user } from "../Context/UserContext";
import "../index.scss";

const QuizQuestion = () => {
  const { state, dispatch } = useContext(user);
  const [que, setQue] = useState(0);
  const [solved, setSolved] = useState({disableSelection: false});
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  

  const handleCheckAns = (selectedAns) => {
    console.log(selectedAns)
   const correctAns =  selectedAns === state.allQuestion[que].correct_answer;
  
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


console.log(solved)
  return (
    <div className="quiz-container">
      <div>{state.allQuestion[que].question}</div>

      <div>
        <ul>
          {shuffledAnswers?.map((el, i) => (
            <li
           
              style={{
                backgroundColor : 
                solved.answer === el ?
                solved.correctAns ? "green" : "red"
                : "transparent",

                color: solved.answer === el ? "white" : "black",
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

      <button
        disabled={que === state.allQuestion.length - 1}
        onClick={() => setQue(que + 1)}
      >
        Next
      </button>
      <button disabled={que === 0} onClick={() => setQue(que - 1)}>
        pre
      </button>
    </div>
  );
};

export default QuizQuestion;
