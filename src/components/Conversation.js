import React from 'react'
import '../css/conversation.css'

const Conversation = (showTextbox) => {
   console.log(showTextbox)

   const showDisableTextBox = <p> &#10680;	Text A mssage</p>
   const showTextBoxField = <form>
      <input onClick={(e) => { console.log(e.target.value) }} className="inputBox2" placeholder="Type a message"></input>
      <button className="sendButton">Send</button>
   </form>
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

         <div className="textContainer">
            <div className="linebreak"></div>
            {/* the inputfield should of dissapear when shoTextbox is true*/}
            {showTextbox === true ? showDisableTextBox : showTextBoxField}
         </div>

      </div>
   )
}

export default Conversation