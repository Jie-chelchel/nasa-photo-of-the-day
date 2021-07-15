import { expressionStatement } from "@babel/types";
import React, { useState } from "react";
import ChooseDate from "./ChooseDate";

const SaveNewDate = () => {
  const saveEnteredDate = (enteredDate) => {
    console.log(new Date(enteredDate));
  };

  return <div></div>;
};

export default SaveNewDate;
