import './Location.scss';

// we want to display a location card that references our database

export default function Location(props) {
    const { locationObj } = props;
    console.log(locationObj);
    return (
        <div className="card-container">
            {locationObj.map((location) => {
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
    )
}
