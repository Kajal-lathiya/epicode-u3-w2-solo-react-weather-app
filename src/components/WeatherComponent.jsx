import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography
} from "mdb-react-ui-kit";
import "../App.css";
const WeatherComponent = ({ weatherData }) => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f5f6f7" }}>
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard className="text-white">
              <div className="bg-image">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                  className="card-img"
                  alt="weather"
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                ></div>
              </div>
              <div className="card-img-overlay text-dark p-5">
                <MDBTypography tag="h4" className="mb-0">
                  {weatherData.name}
                </MDBTypography>
                <p className="display-2 my-3">{weatherData.main.temp} &deg;C</p>
                <p className="mb-2">
                  Feels Like:{" "}
                  <strong>{weatherData.main.feels_like} &deg;C</strong>
                </p>
                <p className="mb-2">
                  Pressure: <strong>{weatherData.main.pressure} &deg;C</strong>
                </p>
                <p className="mb-2">
                  Humidity: <strong>{weatherData.main.humidity} &deg;C</strong>
                </p>
                <MDBTypography tag="h5">
                  {weatherData.weather[0].main}
                </MDBTypography>
                <p>{weatherData.weather[0].description}</p>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
export default WeatherComponent;
