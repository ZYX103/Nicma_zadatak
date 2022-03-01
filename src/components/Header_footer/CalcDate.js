import react, { useState, useEffect } from "react";
import classes from "./CalcDate.module.css";

const CalcDate = (props) => {
  const [holiday, setHoliday] = useState([]);
  useEffect(() => {
    addHoliday();
  }, []);

  async function addHoliday(prop) {
    const response = await fetch(
      "https://calendarific.com/api/v2/holidays?&api_key=c5f2f14578db8b792c81403a69857bffa282252c&country=HR&year=2022'&type=national"
    );
    const data = await response.json();
    setHoliday(data.response.holidays);
  }

  const name = holiday?.map((i) => i.name);
  const dates = holiday?.map((i) => i.date.iso);

  const now = new Date();

  let closest = Infinity;

  dates?.forEach(function (d) {
    const date = new Date(d);

    if (date >= now && (date < new Date(closest) || date < closest)) {
      closest = d;
    }
  });
  const index = dates?.indexOf(closest);
  const holidayName = name[index];

  return (
    <div className={classes.calcDate}>
      <p> Next Holiday in Croatia: </p>
      {closest ? <p>{closest}</p> : ""}
      {closest ? <p>{holidayName}</p> : ""}
    </div>
  );
};

export default CalcDate;
