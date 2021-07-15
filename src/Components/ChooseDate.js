import { expressionStatement } from "@babel/types";
import React, { useEffect, useState } from "react";

function ChooseDate(props) {
  let curDate = new Date();
  let curYear = curDate.getFullYear();
  let curMonth =
    curDate.getMonth() + 1 < 10
      ? `0${curDate.getMonth() + 1}`
      : `${curDate.getMonth() + 1}`;
  let curDay =
    curDate.getDate() < 10 ? `0${curDate.getDate()}` : `${curDate.getDate()}`;
  curDate = `${curYear}-${curMonth}-${curDay}`;

  const [enteredDate, setEnteredDate] = useState(curDate);
  const dateChangeHandler = (event) => {
    let newValue = event.target.value;
    setEnteredDate(newValue);

    props.getNewDate(enteredDate);
  };

  return (
    <div>
      <form>
        <input
          type="date"
          value={enteredDate}
          min="2019-01-01"
          max="2021-07-14"
          onChange={dateChangeHandler}
        />
        <label> Choose a Date</label>
      </form>
    </div>
  );
}

export default ChooseDate;
