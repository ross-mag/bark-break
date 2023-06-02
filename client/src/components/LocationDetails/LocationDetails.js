import React from 'react'

function LocationDetails() {
  return (
    <div className="location-details">
            <button className="location-details__button">Back To Results</button>
        <div >
            <div className="location-details__left" >
                <h1 className="location-details__location" ></h1>
                <h2 className="location-details__category"></h2>
            </div>
            <div className="location-details__right">
                <h2 className="location-details__distance"></h2>
                <h2 className="location-details__time"></h2>
            </div>
        </div>
        <p className="location-details__description"></p>
        <div>

        <div className="location-details__left">
          <p className="location-details__address"></p>
          <p className="location-details__contact"></p>
          <p className="location-details__hours"></p>
          <p className="location-details__map-link"></p>
        </div>
        <div className="location-details__right">
          <img className="locations-details__logo" />
        </div>
        </div>
    </div>
  )
}

export default LocationDetails