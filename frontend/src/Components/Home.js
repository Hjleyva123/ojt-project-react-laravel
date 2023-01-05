import React, { useState } from "react";
import { useNavigate } from "react-router-dom";





function Home() {

    const [Task,setTask] =useState("")
    const [Time,setTime] =useState("")
    const [Tasklist,setTasklist] =useState([])

    const addTask =() =>{
        setTasklist([...Tasklist,{Task:Task,Time:Time}])
        setTask()
        setTime('')



        console.log("Data sending");
        console.log(Task);
        console.log(Time); 


    }


    /*const navigate = useNavigate();

    const onSignOut = async (e) => {

        navigate("/sign-in");*/

    

    return (
        <div >
            


<center><h1>HOMEPAGE</h1>
<label>Task</label><br></br>
<input type="text" id="Task" onChange={(e)=> {
    setTask(e.target.value)
}}/>

<br></br>
<label>Time</label><br></br>
<input type="text" id="Time"onChange={(e)=> {
    setTime(e.target.value)

}}/>
<br></br>

<button onClick={Task}>Add</button>


{Tasklist.map((Task)=> {
    return <Task Task={Task.Task} Time={Task.Time}/>
})}
</center>



</div>

);
};
                    



export default Home;