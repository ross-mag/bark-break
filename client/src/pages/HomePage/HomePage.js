import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/images/Figma basics (1).svg"
import TimeInput from "../../components/TimeInput/TimeInput";
import Location from "../../components/Location/Location";

function HomePage() {

    const [apiResponse, setApiResponse] = useState([]);
    const baseURL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        axios
            .get("http://localhost:2319/locations")
            .then((res) => {
                console.log(res);
                setApiResponse(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    console.log(apiResponse);
    return (
        <div className="homepage">
            <h2 className="tagline"></h2>
            <div className="homepage-container">
                <img
                    src={logo}
                    alt="site logo"
                    className="logo"
                />
            </div>
            <TimeInput />
            {/* <Location locationObj={apiResponse} /> */}
            <div className="card-container">
            {apiResponse.map((location) => {
                <div className="card">
                    <div className="card-container">
                        <h3 className="card_location">{location.location}</h3>
                        <h4 className="card_distance">{location.distance}</h4>
                        <h4 className="card_eta">Time to get there: {location.time}</h4>
                        <h4 className="card_category">Category: {location.category}</h4>
                        <h4 className="card_address">{location.address}</h4>
                        <h4 className="card_contact">Contact: {location.contact}</h4>
                    </div>
                    <div className='card_map-link'>
                        {/* <p> {locationObj.google-maps-link}</p> */}
                    </div>
                </div>
                }
            )}
        </div>
        </div>
    );
}

export default HomePage

