import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./UI/Card";
import VideoPlayer from "./Components/VideoPlayer";
import Header from "./Components/Header";
import Explanation from "./Components/Explanation";
import Title from "./Components/Title";
import ChooseDate from "./Components/ChooseDate";
import ImageDisplay from "./Components/ImageDisplay";
function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const [curPickedDate, setCurPickedDate] = useState("");

  const getNewDate = (newDate) => {
    setCurPickedDate(newDate);
  };
  const fetchNASAData = () => {
    setIsloading(true);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${curPickedDate}&api_key=arVwBIxMFNk8faW1XkOTadq7etxeD88nXDNdHSaQ`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchNASAData();
  }, [curPickedDate]);
  return (
    <div>
      <Header />
      <ChooseDate getNewDate={getNewDate} curPickedDate={curPickedDate} />
      <Title title={data.title} />
      <div>
        {data.media_type === "image" ? (
          <ImageDisplay date={data.date} url={data.url} isLoading={isLoading} />
        ) : (
          <VideoPlayer date={data.date} url={data.url} isLoading={isLoading} />
        )}
        {}
        <Explanation explanation={data.explanation} />
      </div>
    </div>
  );
}

export default App;
