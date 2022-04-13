// import {Header, Footer} from "./components/Header";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Input } from "./components/Input";
import React,{useState} from 'react'
import { TaskList } from "./components/Task/TaskList";




function App() {
  let [state,setState]=useState(''); //write js code here
  let [task,setTask]=useState([]);
   
 
  return <div className="App">
     <Input state={state} setState={setState} setTask={setTask}/>
     <TaskList task={task} setTask={setTask}/>
  </div>;
 
}

export default App;
