import axios from "axios";
import { useState, useEffect } from "react";


function TimeInput() {

    const [time, setTime] = useState("");
    const [locations, setLocations] = useState([]);

    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };

    // const isFormValid = () => {
    //     if (!time) {
    //         return false;
    //     } else {
    //         return true;
    //     };
    // };

    const handleSubmit = (event) => {
        event.preventDefault();

        // if (isFormValid) {
            axios
                .get(`http://localhost:2319/locations/${time}`)
                .then(response => {
                    console.log(response);
                    setLocations(response.data);
                });

        // } else {
        //     alert("Enter a valid time");
        // }
    }

    return (
        <form onSubmit={handleSubmit} className="time-form">
            <label>
                How much time do you have? <input type="text" name="time" onChange={handleChangeTime} value={time} className="time-form__input" />
            </label>
            {!locations ? <h1>Loading...</h1> : 
            <div className="time-form_info">
                {locations.map((location) => (
                    <h3>{location.name}</h3>
                    ))}
            </div>
            }
        </form>
    )
}

export default TimeInput