import React, { useContext, useState } from "react";
import "../index.scss";
import { user,   } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const catergory = [
    {
      id: 9,
      name: "General Knowledge",
    },
    {
      id: 10,
      name: "Entertainment: Books",
    },
    {
      id: 11,
      name: "Entertainment: Film",
    },
    {
      id: 12,
      name: "Entertainment: Music",
    },
    {
      id: 13,
      name: "Entertainment: Musicals & Theatres",
    },
    {
      id: 14,
      name: "Entertainment: Television",
    },
    {
      id: 15,
      name: "Entertainment: Video Games",
    },
    {
      id: 16,
      name: "Entertainment: Board Games",
    },
    {
      id: 17,
      name: "Science & Nature",
    },
    {
      id: 18,
      name: "Science: Computers",
    },
    {
      id: 19,
      name: "Science: Mathematics",
    },
    {
      id: 20,
      name: "Mythology",
    },
    {
      id: 21,
      name: "Sports",
    },
    {
      id: 22,
      name: "Geography",
    },
    {
      id: 23,
      name: "History",
    },
    {
      id: 24,
      name: "Politics",
    },
    {
      id: 25,
      name: "Art",
    },
    {
      id: 26,
      name: "Celebrities",
    },
    {
      id: 27,
      name: "Animals",
    },
    {
      id: 28,
      name: "Vehicles",
    },
    {
      id: 29,
      name: "Entertainment: Comics",
    },
    {
      id: 30,
      name: "Science: Gadgets",
    },
    {
      id: 31,
      name: "Entertainment: Japanese Anime & Manga",
    },
    {
      id: 32,
      name: "Entertainment: Cartoon & Animations",
    },
  ];
  const [loading, setLoading] = useState(false)
  const { state, dispatch } = useContext(user);
  console.log(state)
  const [selectedCategory, setSelectedCategory] = useState(9)
  const navigate = useNavigate()
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(selectedCategory)
setLoading(true)
   fetch(`https://opentdb.com/api.php?amount=${state.totalQuestion}&category=${selectedCategory}`)
   .then((data)=>data.json())
   .then((res)=>{
    if(res.response_code === 0){
      dispatch({type:"ALL_QUESTIONS", payload: res.results })
      dispatch({type:"RESET"})
      console.log(res.results)
      setLoading(false)
       navigate("/quiz")
    }
   })
   .catch((err)=>alert("An Error Occured!"))
   .finally(()=>setLoading(false))
  }

  return (
    <div className='main-container' >
  <div className="container">
      <header>Welcome to quiz app</header>
      <h3>Check your knowledge in a specific category</h3>

      <form onSubmit={handleSubmit} >
        <div>
          Name : <input required={true} onChange={(e)=>(dispatch({type:"NAME", payload:e.target.value}))} value={state.name} type="text" />
        </div>

        <div>
          Category :
          <select onChange={(e)=>setSelectedCategory(e.target.value)} >
            {
              catergory.map((el)=><option  key={el.id} value={el.id}>{el.name}</option>)
            }
            
          </select>
        </div>

        <div>
          Questions : <input onChange={(e)=>(dispatch({type:"TOTAL_QUESTION", payload:e.target.value}))} value={state.totalQuestion} type="number" />
        </div>

        <button disabled={loading} type="submit">{ loading? "loading" : "Start Quiz"}</button>
      </form>
    </div>
    </div>
  
  );
};

export default Home;
