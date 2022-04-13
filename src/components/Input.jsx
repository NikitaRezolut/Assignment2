import React,{useState} from 'react'

    
  
export const Input = (props) => {
   console.log(props)
   
    function changeInput(e){
        // props.state(e.target.value);
        props.setState(e.target.value);
    };
    function submitInput(p){
        // props.state(e.target.value);
        
        if(props.state!="")
        {
            props.setTask((prev)=>[...prev,props.state]);//spread operator
            props.setState("")
        }
        else{
            alert("Enter task first")
        }

        
    };
    function ResetInput(){
      props.setTask([]);
    }
    
    return (
    <div>
        
      <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Task</label>
            <input type="text" className="form-control" value={props.state} onChange={changeInput} id="Task" placeholder="Enter Task"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Completed?</label>
            <select className="form-select" aria-label="Default select example" id="Completed">
                
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
          </div>
          <div className="mb-3">
            <button type="submit" onClick= {submitInput} className="btn btn-success btn-primary mb-3">Submit</button>
            
          </div>
          <div className="container">
              <button onClick={ResetInput} className="btn btn-secondary">Reset</button>
          </div>
      </div>
          
    </div>
  )
}
