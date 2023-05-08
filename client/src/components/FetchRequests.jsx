import React, { useEffect, useState } from "react";
require("./Fetch.css");

function FetchRequests() {
  const [data, setData] = useState([
    {
      id: null,
      reach: null,
      email: null,
      date: null,
      new_likes: null,
    },
  ]);

  const Fetch = async (e) => {
    const FetchData = await fetch("http://localhost:80/exampleRoute", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((fetchData) => {
        setData(fetchData.results);
        console.log(fetchData.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <>
      <div className="container">
        <h1>React js and Node js Deployment Success Full.</h1>
        <button onClick={Fetch}>Request Result</button>

        <div className="content">
          {data.map((data, index) => {
            return (
              <>
                <div className="coloum">
                  <div className="row">
                    <li>{data.id}</li>
                    <li>{data.reach}</li>
                    <li>{data.email}</li>
                    <li>{data.date}</li>
                    <li>{data.new_likes}</li>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FetchRequests;
