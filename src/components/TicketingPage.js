import React, { useState, useEffect } from 'react';
import Assignee from '../components/Assignee'
import Classify from '../components/Classify'
import Conversation from '../components/Conversation'

import "../css/ticketingPage.css"
const TicketingPage = () => {
   const [tickets, setTickets] = useState([{
      _id: "5cdb6454107a752e479349f9",
      Title: "New Task",
      Assignee: "Razan Kiwan",
      Status: "New",
      Goal: "Buy a product"
   },
   {
      _id: "5cdb6454107a752w479349f9",
      Title: "New Task",
      Assignee: "Hengry Wayne",
      Status: "New",
      Goal: "Buy a product"

   },
   {
      _id: "5cdb6424107a752w479349f9",
      Title: "New Task",
      Assignee: "Rachel Mendie",
      Status: "New",
      Goal: "Buy a product"
   },
   {
      _id: "5cdb6484107a752w479349f9",
      Title: "New Task",
      Assignee: "Dennis Nombe",
      Status: "New",
      Goal: "Buy a product"
   },
   {
      _id: "5cdb6424107a752w449349f9",
      Title: "New Task",
      Assignee: "Anuel Andy",
      Status: "Snooze",
      Goal: "Buy a product"
   }
   ])

   const [selectedTask, setSelectedTask] = useState('')
   const [newTask, setNewTask] = useState('')

   useEffect(() => {
      console.log(selectedTask)
   }, [selectedTask, newTask, tickets])



   return (
      <div className="mainContainer">
         <div className="leftPanel">
            <Assignee tickets={tickets} />
         </div>
         <div className="classifyPanel">
            <Classify onsetSeletedTask={setSelectedTask}
               setNewTask={setNewTask}
               newTask={newTask}
               selectedTask={selectedTask}
               setTickets={setTickets}
            />
         </div>
         <div className="rightPanel">
            Right
         </div>

      </div>
   )
}

export default TicketingPage;