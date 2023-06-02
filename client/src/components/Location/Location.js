import 'locations.scss';
import Home from '../../pages/HomePage';

// we want to display a location card that references our database

export default function Location(props){
    const {locationObj} = props;
  
    return (
        <div className="card">
        <Link to= {`/location/${location.id}`} className="card_router-link">
            <h3 className="card_location">{locationObj.location}</h3>
            <h4 className="card_distance">{locationObj.distance}</h4>
            <h4 className="card_eta">Time to get there: {locationObj.time}</h4>
            <h4 className="card_category">Category: {locationObj.category}</h4>
        </Link>
        <div className='card_map-link'>
            <p> {locationObj.google-maps-link}</p>
        </div>
        </div>
)

}
