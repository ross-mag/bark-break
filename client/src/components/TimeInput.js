import axios from "axios";


function Calculator() {

    const [time, setTime] = useState("");
    const [location, setLocations] = useState("");

    const handleChangeTime = (event) => {
        setTime(event.target.value);
    };

    const isFormValid = () => {
        if (!time) {
            return false;
        };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isFormValid()) {
                axios
                    .get(`http://localhost:2319/locations/${time}`)
                    .then(response => {
                        setLocations = response.data;
                    });
            
        } else {
            alert("Enter a valid time");
        }
    }

  return (
    <form onSubmit={handleSubmit} className="time-form">
        <label>
            How much time do you have? <input type="text" name="time" onChange={handleChangeTime} value={time} className="time-form__input" />
        </label>
        <div className="time-form_info">
            {locations.map((location) => (
                <h3>locations.name</h3>
            ))}

        </div>
    </form>
  )
}

export default Calculator