import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./UI/Card";
import VideoPlayer from "./Components/VideoPlayer";
import Header from "./Components/Header";
import Explanation from "./Components/Explanation";
import Title from "./Components/Title";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const fetchNASAData = () => {
    setIsloading(true);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=arVwBIxMFNk8faW1XkOTadq7etxeD88nXDNdHSaQ"
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
  }, []);
  return (
    <div>
      <Header />
      <Title title={data.title} />
      <div>
        {<VideoPlayer date={data.date} url={data.url} isLoading={isLoading} />}
        <Explanation explanation={data.explanation} />
      </div>
    </div>
  );
}

export default App;
