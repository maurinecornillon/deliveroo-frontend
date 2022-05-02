import "./App.css";

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://m-project-deliveroo-backend.herokuapp.com/"
    );
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <>
      <div className="container">
        <section>
          <Header />
        </section>
        <section className="menu">
          <div className="left-menu">
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <div className="right-menu">
            <img src={data.restaurant.picture} alt="picture-restau" />
          </div>
        </section>
        <section className="brunch">
          <div className="left">
            {data.categories.map((item, index) => {
              return (
                <div key={index}>
                  {item.name}

                  {data.meals.map((label, index) => {
                    return <div key={index}>{label.title}</div>;
                  })}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
