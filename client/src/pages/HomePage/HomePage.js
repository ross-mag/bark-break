import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/images/Figma basics (1).svg"

function HomePage() {

    const [apiResponse, setApiResponse] = useState(null);
    const baseURL = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        axios
            .get(baseURL)
            .then((res) => {
                console.log(res);
                setApiResponse(res);
            })
            .catch((error) => {
                console.log(error);
            }, []);
    });
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
            <div className="icons"></div>
        </div>
    );
}

export default HomePage

