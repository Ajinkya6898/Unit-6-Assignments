import React, { useState, useEffect } from "react";
import "./styles.css";
function Resturant() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:5000/resturant`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  };
  return (
    <div className="container">
      <h1 className="user">Resturant List</h1>
      <div className="main-box">
        {user.map((user) => (
          <div className="box">
            <img src={user.img}></img>
            <div className="data">
              <p className="h6">Name : {user.name}</p>
              <p className="h6">Address : {user.address}</p>
              <p className="h6">Number : {user.number}</p>
              <p className="h6">City : {user.city}</p>
              <p className="h6">ID : {user._id}</p>
              <button className="submit">Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resturant;
