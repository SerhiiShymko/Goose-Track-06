import { CalendarToolBar } from 'components/CalendarToolBar/CalendarToolBar';
// import  ChoosedMonth  from "components/ChoosedMonth/ChoosedMonth";
// import Spinner from 'components/Spinner/Spinner';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  parse,
  startOfWeek,
} from 'date-fns';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setCurrentDate } from 'redux/auth/authSlice';
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";

export const WrapperCalendar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // const date = format(new Date(), 'MMMM yyyy');
  // const [activeDate, setActiveDate] = useState(date);

  const selectDate = useSelector(state => state.auth.currentDate);
  const formattedDate = format(selectDate, 'MMMM yyyy');
  const formattedOneDay = format(selectDate, 'yyyy-MM-dd');

  let firstDayCurrentMonth = parse(formattedDate, 'MMMM yyyy', new Date());
  let currentDay = parse(formattedOneDay, 'yyyy-MM-dd', new Date());

  // const handleClick = e => {
  //   // const selectDate = e.currentTarget.dataset.day;
  // };
  const nextMonth = () => {
    const locationDay = location.pathname.slice(10, 13)
    if (locationDay === 'day') {
      const nextDay = add(currentDay, { days: 1 });
      const dayTimeStamp = nextDay.getTime();
      dispatch(setCurrentDate(dayTimeStamp));
      console.log(nextDay)
    } else {
      let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
      const dateTimeStamp = firstDayNextMonth.getTime();
      dispatch(setCurrentDate(dateTimeStamp));
    }
  };

  const prevMonth = () => {
    const locationDay = location.pathname.slice(10, 13)
    if (locationDay === 'day') {
      const prevDay = add(currentDay, { days: -1 });
      const dayTimeStamp = prevDay.getTime();
      dispatch(setCurrentDate(dayTimeStamp));
      console.log(prevDay)
    } else {
      let firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
      const dateTimeStamp = firstDayPrevMonth.getTime();
      dispatch(setCurrentDate(dateTimeStamp));
    }
  };

  const result = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  });

  return (
    <>
      <CalendarToolBar
        dayInterval={result}
        onNext={nextMonth}
        onPrev={prevMonth}
        dateToday={formattedDate}
        // onClickDate={handleClick}
      />
      {/* <ChoosedMonth
        dayInterval={result}
        onNext={nextMonth}
        onPrev={prevMonth}
        dateToday={activeDate}
      /> */}
    </>
  );
};
