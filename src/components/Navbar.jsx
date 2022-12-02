import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import WeatherCard from "./Weather";

const NavbarScreen = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const weatherInfo = useSelector((state) => state.weather.content);

  const baseEndpoint = "https://api.openweathermap.org/data/2.5/forecast?q=";
  const APIKey = "342ee94798adc7582269e2ec103b828c";

  const onHandleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&appid=" + APIKey);
      if (response.ok) {
        const { list } = await response.json();
        dispatch({
          type: "GET_WEATHER_INFO",
          payload: list
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">World Weather</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            value={query}
            onChange={onHandleChange}
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-info" onClick={handleSubmit}>
            Search
          </Button>
        </Form>
      </Navbar>
      {weatherInfo.length !== 0 && (
        <div>
          <h2 className="mt-2 mb-2">Weather Information</h2>
          {weatherInfo.map((data, i) => (
            <WeatherCard id={i} weatherData={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarScreen;
