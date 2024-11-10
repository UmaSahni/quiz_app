import { createContext, useContext, useReducer } from "react";

export const user  = createContext()

const UserContextProvider = ({children}) =>{

  const initialState = {
  name: "",
  score: 0,
  correctAns: 0,
  wrongAns: 0,
  totalQuestion: 5,
  allQuestion : []
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "NAME": {
      return { ...state, name: payload };
    }
    case "TOTAL_QUESTION": {
      return { ...state, totalQuestion: payload };
    }
    case "ALL_QUESTIONS" :{
        return {...state, allQuestion: payload}
    }
    case "CORRECT" :{
      return {...state, correctAns: state.correctAns+1}
    }
    case "WRONG" :{
      return {...state, wrongAns: state.wrongAns+1}
    }
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialState)


    return ( <user.Provider  value={{state, dispatch}}  >{children}</user.Provider>)
}
export default UserContextProvider