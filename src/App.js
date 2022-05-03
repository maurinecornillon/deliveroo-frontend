import "./App.css";

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://m-project-deliveroo-backend.herokuapp.com/"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
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
            <img src={data.restaurant.picture} alt="restau" />
          </div>
        </section>

        <section className="center">
          {data.categories.map((items, index) => {
            return (
              items.meals.length > 0 && (
                <div className="restauTitle">
                  <h2 key={index}> {items.name}</h2>
                  <div className="restauItems">
                    {items.meals.map((label, index) => {
                      return (
                        <div
                          // onClick={() => {
                          //   addToCart(label);
                          // }}
                          key={index}
                          className="items"
                        >
                          <div className="left-items">
                            <h3>{label.title}</h3>
                            {label.description && (
                              <p className="items-description">
                                {label.description}
                              </p>
                            )}

                            <p className="price">{label.price} €</p>
                          </div>
                          {label.picture && (
                            <img src={label.picture} alt="fgdjgd" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
