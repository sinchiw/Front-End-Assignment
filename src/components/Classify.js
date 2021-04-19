import React from 'react';
import '../css/classify.css'

const Classify = ({ onsetSeletedTask, setNewTask, newTask, selectedTask, setTickets, tickets }) => {
   const selectedList = ['Buy a product', 'Cancel an account', 'Buy and Recommend', 'Ask for business']
   let selectList = true
   let disableButton = ((25 - newTask.length > 0 && !selectedTask) || (25 - newTask.length <= 0 && !selectedTask) || (newTask.length === 0 && selectedTask)) ? true : false


   const addNewTicket = (newTask, selectedTask) => {
      const newTicket = {
         _id: "5cdb6454107a752w479349f9",
         Title: newTask,
         Assignee: "Hengry Wayne",
         Status: "New",
         Goal: selectedTask
      }
   }


   return (
      <div className="classifyMainContainer">
         <div className="classifyBox">
            <h1 className="classifyText">Classify</h1>
            <p>What's the user asking for?</p>
            <div>
               <ul className="dropdown" >
                  <li>Select v
                     <ul>
                        <li id="0" onClick={(e) => { selectList = true; onsetSeletedTask(selectedList[e.target.id]) }}>Buy a product</li>
                        <li id="1" onClick={(e) => { selectList = true; onsetSeletedTask(selectedList[e.target.id]) }}>Cancel an account</li>
                        <li id="2" onClick={(e) => { selectList = true; onsetSeletedTask(selectedList[e.target.id]) }}>Buy and Recommend a gift.</li>
                        <li id="3" onClick={(e) => { selectList = true; onsetSeletedTask(selectedList[e.target.id]) }}>Ask for business</li>
                     </ul>
                  </li>
               </ul>
            </div>
            <p id="pShownToUser">Task name as shown to the user</p>
            <input value={newTask} onChange={(e) => { { setNewTask(e.target.value) } }} id="inputTag" placeholder="Buy What?"></input>
            <div className="characterCountBox">
               <p>{"("}Character left: </p><p id={(25 - newTask.length < 0) ? "pStyle1" : ""}> {25 - newTask.length}{")"}</p>
            </div>
            <div className="emptybox"></div>
            <button className="proccedButton" onClick={() => addNewTicket(newTask, selectedTask)} disabled={disableButton}>Procced</button>

         </div>

      </div >
   )
}

export default Classify;