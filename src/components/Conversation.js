import React from 'react'
import '../css/conversation.css'
import logo from '../Assets/clock.png'
const Conversation = () => {
   return (
      <div className="mainConvoContainer">
         <div className="taskAndSettingContainer">

            <div>
               <p id="title">New Task</p>
            </div>
            <div>
               <div className="settingBox">
                  <p id="timer">00:00</p>
                  <p id="snooze">	&#9719;</p>

                  <p id="mail"> &#9691;</p>
               </div>

            </div>

         </div>
         <div className="convoContainer">
            <div className="messageBoard">
               <div className="messageContainer">
                  <div className="messageBubble">I'd like to do something{"("}first msg in a task{")"}</div>
                  <div className="senderBox">
                     <div className="senderStatus"><p>&#11044;</p></div>
                     <div className="senderInfo"><p>Herman Woods, 11:42 am {"("}Via Email{")"}</p></div>
                  </div>
               </div>

            </div>
         </div>
         <div className="linebreak"></div>
         <div className="textContainer">
            <input className="inputBox" placeholder="Type a message"></input>

         </div>

      </div>
   )
}

export default Conversation