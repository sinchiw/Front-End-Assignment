import React from 'react'
import '../css/conversation.css'
const Conversation = () => {
   return (
      <div className="mainConvoContainer">
         <div className="taskAndSettingContainer">

            <div className="tasktitle">
               <p>New Task</p>
            </div>
            <div>
               <div className='settingBox'>
                  <p>00:00</p>
                  <p> o</p>
                  <p> 0</p>
               </div>

            </div>

         </div>
         <div className="convoContainer">

         </div>

      </div>
   )
}

export default Conversation