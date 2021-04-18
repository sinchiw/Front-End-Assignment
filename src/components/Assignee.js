import React, { useState } from 'react';
import '../css/asaignee.css'
const Assignee = ({ tickets, oncurrentTask }) => {

   let snoozeArray = []
   let currentUser = false

   const currentSelection = (e) => {
      console.log(e.key)
   }

   const renderNewTicket = tickets.filter((ticket) => {
      if (ticket.Status === "Snooze") {
         snoozeArray.push(ticket)
         return false
      }
      return true
   }).map((newTicket, index) => {
      return (
         <div key={newTicket._id}>
            <div onClick={(e) => currentSelection(e)} key={newTicket.id} className="userProfile">
               {newTicket.Assignee.match(/\b(\w)/g).join('')}
            </div>

            <div className='status'>

            </div>


         </div>
      )
   })


   const renderSnooze = snoozeArray.map((snoozeTicket) => {
      return (
         <div key={snoozeTicket.id} className="userProfile">
            {snoozeTicket.Assignee.match(/\b(\w)/g).join('')}
         </div>
      )
   })

   // tickets.map((ticket) => {


   //    return (
   //       <div key={ticket._id} className="userProfile">
   //          {ticket.Assignee.match(/\b(\w)/g).join('')}
   //       </div>

   //    )
   // })



   return (
      <div>
         {renderNewTicket}
         <div className="lineBreak"></div>
         <div>
            {renderSnooze}
         </div>
      </div>

   )
}

export default Assignee;