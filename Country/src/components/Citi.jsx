import { useState } from "react";
import "./Country.css";

export const Citi = () => {
  const [form, setForm] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/city", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <form className="left" onSubmit={handleSubmit}>
      <div>
        City Name :{" "}
        <input
          className="input-box"
          type="text"
          name="cityName"
          placeholder="Enter City name"
          onChange={handlechange}
        />
      </div>
      <div>
        Country Name :{" "}
        <input
          className="input-box"
          type="text"
          name="country"
          placeholder="Enter Country name"
          onChange={handlechange}
        />
      </div>

      <div>
        Population{" "}
        <input
          className="input-box"
          type="number"
          name="population"
          placeholder="Enter Population"
          onChange={handlechange}
        />
      </div>

      <input className="btn" type="submit" value="Submit" />
    </form>
  );
};
