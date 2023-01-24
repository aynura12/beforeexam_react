import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../style/add.css";
const Add = () => {
  const [state,setState]=useState([])
  const addData = (e) => {
    // e.preventDefault();
    if(!state.name || !state.age) return;
    axios.post("http://localhost:8080/users", state);
    setState({
      name:"",
      username:"",
      // comment:""
    })
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };


  useEffect(()=>{
  addData()
  },[])
  return (
    <div className="my_addpage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form className="myform" onSubmit={addData}>
              <h5>ADD PAGE</h5>
              <input name="name"type="text" placeholder="Name..." onChange={handleChange}/>
              <input name="username" type="text" placeholder="Username..." onChange={handleChange} />
              {/* <input name="comment" type="text" placeholder="Comment..."  onChange={handleChange}/> */}
              <div><button className="button" >ADD</button><button>DELETE</button></div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
