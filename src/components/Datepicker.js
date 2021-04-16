import React, { useState, useEffect } from 'react';
import '../css/datepicker.css'

const DatePicker = () => {
   const [monthNumber, setMonthNumber] = useState(0)
   const [month, setMonth] = useState('Jan')


   const [indexDay, setDayIndex] = useState(1)
   const [day, setDay] = useState('01')


   const [year, setYear] = useState('2021')
   const [yearsCounter, setYearCounter] = useState(2021)

   const [dateSelected, setDateSelected] = useState('')

   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   const days = { 1: "01", 2: "02", 3: "03", 4: "04", 5: "05", 6: "06", 7: "07", 8: "08", 9: "09" }


   const monthSelector = (e) => {
      if (e.target.id === "up") {
         if (months[monthNumber + 1] === undefined) {
            return
         }
         setMonthNumber((prev) => prev + 1)
      } else if (e.target.id === "down") {
         if (monthNumber === 0) {
            return
         }
         setMonthNumber((prev) => prev - 1)
      }
   }

   const daySelector = (e) => {
      if (e.target.id === "up") {
         const getDaysInMonth = (month, year) => {
            return new Date(year, month, 0).getDate();
         }
         let maxDay = getDaysInMonth(monthNumber + 1, yearsCounter)
         console.log(maxDay)

         if (indexDay in days) {
            if (!indexDay[days]) {
               setDayIndex(prev => prev + 1)
            }
         }
         else {
            if (indexDay + 1 > maxDay) return
            setDayIndex(prev => prev + 1)
            console.log("ive been hit", indexDay)
         }
      } else if (e.target.id === "down") {
         if (indexDay - 1 === 0) {
            return
         }
         setDayIndex(prev => prev - 1)

      }
   }

   const yearsSelector = (e) => {
      if (e.target.id === 'up') {
         if (year > 2020) return
         setYearCounter(prev => prev + 1)
      } else if (e.target.id === "down") {
         setYearCounter(prev => prev - 1)
         console.log(yearsCounter)
      }
   }

   useEffect(() => {
      setMonth(months[monthNumber])
      if (indexDay[days]) {
         return setDay(days[indexDay])
      }
      const dayString = String(indexDay)
      setDay(dayString)

      const yearString = String(yearsCounter)
      setYear(yearString)

   }, [monthNumber, indexDay, yearsCounter])





   return (
      <div className='MainContainer'>
         <div className="leftTabContainer">
            <p id="pTitle">0.3.08.Date of</p>
            <button>&#10004; ADS-36</button>
         </div>
         <div className='dateContainer'>
            <div>
               <p>Date of birth</p>
               <input value={month} className="dateInputField"></input>
               <div className="datePickerBox">
                  <div className="datePickerDisplay">
                     <div className="monthDisplay">
                        <button id="up" className="upArrow" onClick={(e) => monthSelector(e)} >^</button>
                        <p id="dateLabel">{month}</p>
                        <button id="down" className="downArrow" onClick={(e) => monthSelector(e)}>v</button>
                     </div>
                     <div className="dayDisplay">
                        <button id="up" className="upArrow" onClick={(e) => daySelector(e)}>^</button>
                        <p id="datelabel">{day}</p>
                        <button id="down" className="downArrow" onClick={(e) => daySelector(e)} > v</button>
                     </div>
                     <div className="yearDisplay">
                        <button id="up" className="upArrow" onClick={(e) => yearsSelector(e)} >^</button>
                        <p id="datelabel">{year}</p>
                        <button id="down" className="downArrow" onClick={(e) => yearsSelector(e)}>v</button>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div >
   )
}

export default DatePicker;