import "./HomePage.scss";
import { useState, useEffect } from "react";
import axios from "axios";

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
            {apiResponse ? (
                <p> Reponse from Express API: {apiResponse}</p>
            ) : (
                <p>No response from Express API.</p>
            )}
            Bark Break
        </div>
    );
}

export default HomePage

