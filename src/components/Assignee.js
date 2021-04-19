import React from 'react';
import '../css/asaignee.css'
const Assignee = ({ tickets, oncurrentTask }) => {
   let snoozeArray = []

   //filtering out the tickets base on status
   const renderNewTicket = tickets.filter((ticket) => {
      if (ticket.Status === "Snooze") {
         snoozeArray.push(ticket)
         return false
      }
      return true
   }).map((newTicket, index) => {
      return (
         <div key={newTicket._id}>
            <div className="userProfile">
               {newTicket.Assignee.match(/\b(\w)/g).join('')}
            </div>
            <div className='status'></div>
         </div>
      )
   })


   const renderSnooze = snoozeArray.map((snoozeTicket) => {
      return (
         <div key={snoozeTicket._id} >
            <div className="userProfile">
               {snoozeTicket.Assignee.match(/\b(\w)/g).join('')}
            </div>
            <div className='snoozeStatus'></div>
         </div>

      )
   })
   return (
      <div>
         <div className="profileImage">
            PI
         </div>
         {renderNewTicket}
         <div className="lineBreak"></div>
         <div>
            {renderSnooze}
         </div>
      </div>

   )
}

export default Assignee;