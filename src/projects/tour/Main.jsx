import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Logic from "./Logic";
import "./tour.css";

const url = "https://course-api.com/react-tours-project";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const removeTour = (id) => {
    const newTours = data.filter((items) => items.id !== id);
    setData(newTours)
  };

  const fetchdata = async () => {
    setLoading(true);
    try {
      const myData = await fetch(url);
      const response = await myData.json();
      setData(response);
      setLoading(false);
      console.log(response);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  if (data.length === 0) {
    return (
      <div className="title">
        <h2>No Tour left</h2>
        <button className="btn" onClick={() => fetchdata()}>
          Refresh
        </button>
      </div>
    );
  }
  return (
    <>
      <main>
        <Logic myData={data} removeTour={removeTour} />
      </main>
    </>
  );
};

export default Main;
