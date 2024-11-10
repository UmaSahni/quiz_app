import React, { useContext, useState } from "react";
import { user } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
const Result = () => {
  const { state, dispatch } = useContext(user);
  const navigate = useNavigate()
  return (
    <div>
      <h1 className="main-heading">Quick Quiz </h1>

      <div className="result-conatiner">
        <h2>
          Hi <span>{state.name},</span>
        </h2>
        <p>Thank you for taking the time and putting in the effort to complete this quiz! We appreciate your dedication to learning and challenging yourself. Every step you take is a step closer to mastering new knowledge.  </p>

        <div className="flex-container">
          <div>
            <h3>Here is your Score Card</h3>
            <table>
              <thead>
                <th>Total Questions</th>
                <th>Correct Answer</th>
                <th>Wrong Answers</th>
              </thead>
              <tbody>
                <td>{state.allQuestion.length}</td>
                <td>{state.correctAns}</td>
                <td>{state.wrongAns}</td>
              </tbody>
            </table>
          </div>

          <div className="score-circle">{state.score}/{state.allQuestion.length*10}</div>
        </div>

      </div>

      <button className="back-btn" onClick={()=>navigate("/")} >Home</button>
    </div>
  );
};

export default Result;
