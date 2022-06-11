import { useState, useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const [data, setData] = useState([]);

  const [sort, setSort] = useState({
    item: "id",
    order: "asc",
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:8080/city`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  const handleSort = (e) => {
    const { id, value } = e.target;
    console.log(id);
    console.log(value);
    console.log(e.target);
  };

  console.log(data);

  return (
    <div className="left_margin">
      <div className="sort">
        <div>
          Population:
          <select className="sort">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          Country:
          <select className="sort">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="btn">Sort</button>
      </div>
      <table className="table" border="1px solid black ">
        <thead>
          <tr>
            <th>city Name</th>
            <th>Population</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((e) => (
            <tr className="row">
              <td className="first_name">{e.cityName}</td>
              <td className="">{e.population}</td>
              <td className="">{e.country}</td>
              <td className="">
                <button>{e.edit}</button>
              </td>
              <td className="">
                {" "}
                <button>{e.delete}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
