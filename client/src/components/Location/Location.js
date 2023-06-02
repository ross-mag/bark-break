import './Location.scss';

// we want to display a location card that references our database

export default function Location(props) {
    const { locationObj } = props;

    return (
        <div className="card">
            <div className="card-container">
                <h3 className="card_location">{locationObj.location}</h3>
                <h4 className="card_distance">{locationObj.distance}</h4>
                <h4 className="card_eta">Time to get there: {locationObj.time}</h4>
                <h4 className="card_category">Category: {locationObj.category}</h4>
                <h4 className="card_address">{locationObj.address}</h4>
                <h4 className="card_contact">Contact: {locationObj.contact}</h4>
            </div>
            <div className='card_map-link'>
                <p> {locationObj.google-maps-link}</p>
            </div>
        </div>
    );
}
