import React, { useState, useEffect } from 'react';
import '../css/datepicker.css'

const DatePicker = () => {
   const [showDatePicker, setShowDatePicker] = useState(false)

   const [monthNumber, setMonthNumber] = useState(0)
   const [month, setMonth] = useState('Jan')


   const [indexDay, setDayIndex] = useState(1)
   const [day, setDay] = useState('01')


   const [year, setYear] = useState('2021')
   const [yearsCounter, setYearCounter] = useState(2021)

   const [dateSelected, setDateSelected] = useState('')

   const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   const days = { 1: "01", 2: "02", 3: "03", 4: "04", 5: "05", 6: "06", 7: "07", 8: "08", 9: "09" }


   const monthPicker = (e) => {
      if (e.target.id === "up") {
         if (months[monthNumber + 1] === undefined) {
            setMonthNumber(0)
            return
         }
         setMonthNumber((prev) => prev + 1)
      } else if (e.target.id === "down") {
         if (monthNumber === 0) {
            setMonthNumber(months.length - 1)
            return
         }
         setMonthNumber((prev) => prev - 1)
      }
   }

   const dayPicker = (e) => {
      const getDaysInMonth = (month, year) => {
         return new Date(year, month, 0).getDate();
      }
      let maxDay = getDaysInMonth(monthNumber + 1, yearsCounter)
      if (e.target.id === "up") {


         if (indexDay + 1 > maxDay) {
            return setDayIndex(1)
         }

         setDayIndex(prev => prev + 1)
         console.log("ive been hit", indexDay)
      } else if (e.target.id === "down") {
         if (indexDay - 1 === 0) {
            setDayIndex(maxDay)
            return
         }
         setDayIndex(prev => prev - 1)

      }
   }



   const yearPicker = (e) => {
      if (e.target.id === 'up') {
         if (year > 2020) return
         setYearCounter(prev => prev + 1)
      } else if (e.target.id === "down") {
         setYearCounter(prev => prev - 1)
      }
   }

   useEffect(() => {

      setMonth(months[monthNumber])
      if (days[indexDay] !== undefined) {
         console.log(day)
         setDay(days[indexDay])
      } else {
         const dayString = String(indexDay)
         setDay(dayString)
      }

      const yearString = String(yearsCounter)
      setYear(yearString)

      if (showDatePicker === false) {
         const dateString = `${month} ${day}, ${year}`
         setDateSelected(dateString)
      }



   }, [monthNumber, indexDay, yearsCounter, dateSelected, showDatePicker])

   const datePickerBox =
      <div className="datePickerBox" onClick={(e) => { e.stopPropagation(); setShowDatePicker(true) }}>
         <div className="datePickerDisplay">
            <div className="monthDisplay">
               <button id="up" className="upArrow" onClick={(e) => monthPicker(e)} >^</button>
               <p id="dateLabel">{month}</p>
               <button id="down" className="downArrow" onClick={(e) => monthPicker(e)}>v</button>
            </div>
            <div className="dayDisplay">
               <button id="up" className="upArrow" onClick={(e) => dayPicker(e)}>^</button>
               <p id="datelabel">{day}</p>
               <button id="down" className="downArrow" onClick={(e) => dayPicker(e)} > v</button>
            </div>
            <div className="yearDisplay">
               <button id="up" className="upArrow" onClick={(e) => yearPicker(e)} >^</button>
               <p id="datelabel">{year}</p>
               <button id="down" className="downArrow" onClick={(e) => yearPicker(e)}>v</button>
            </div>
         </div>
      </div>



   return (
      <div className='MainContainer' onClick={() => { setShowDatePicker(false) }}>
         <div className="leftTabContainer" >
            <p id="pTitle">0.3.08.Date of</p>
            <button className="buttonADS">&#10004; ADS-36</button>
         </div>
         <div className='dateContainer'>
            <div >
               <p >Date of birth</p>
               <div className="inputBox">
                  <input className="dateInputField" value={dateSelected} onClick={(e) => { e.stopPropagation(); showDatePicker ? setShowDatePicker(false) : setShowDatePicker(true); console.log(showDatePicker) }}></input>
               </div>
               {showDatePicker ? datePickerBox : null}
            </div>
         </div>
      </div >
   )
}

export default DatePicker;