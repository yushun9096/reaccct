import React, { useState } from 'react';
import './Calendar.css';

function Calendar() {
  // 使用 useState 鉤子來維護當前選擇的日期
  const [selectedDate, setSelectedDate] = useState(null);

  // 獲取當前月份的日期列表
  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  // 當用戶選擇日期時，更新 selectedDate 狀態
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // 獲取當前日期
  const today = new Date();

  // 獲取當前月份的日期列表
  const daysInMonth = getDaysInMonth(today.getFullYear(), today.getMonth());

  // 將日期列表轉換為二維數組以便進行渲染
  const weeksInMonth = [];
  let currentWeek = [];
  daysInMonth.forEach((day) => {
    currentWeek.push(day);
    if (day.getDay() === 6) {
      weeksInMonth.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    weeksInMonth.push(currentWeek);
  }

  // 渲染日期選擇器
  return (
    <div className="calendar">
      <div className="month">{today.toLocaleString('default', { month: 'long' })} {today.getFullYear()}</div>
      <div className="days">
        <div className="day">S</div>
        <div className="day">M</div>
        <div className="day">T</div>
        <div className="day">W</div>
        <div className="day">T</div>
        <div className="day">F</div>
        <div className="day">S</div>
      </div>
      {weeksInMonth.map((week, i) => (
        <div className="week" key={i}>
          {week.map((day, j) => (
            <button
              className={`day ${day.getMonth() === today.getMonth() ? '' : 'other-month'} ${selectedDate && day.getTime() === selectedDate.getTime() ? 'selected' : ''}`}
              key={j}
              onClick={() => handleDateClick(day)}
            >
              {day.getDate()}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
