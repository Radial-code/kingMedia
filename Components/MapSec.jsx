import React from "react";
import Image from "next/image";

const MapSec = () => {
  return (
    <>
      <div className=" map_container py-5">
        <iframe
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.06572089727!2d75.68549816234781!3d29.156322702879383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1671869218445!5m2!1sen!2sin"
          // width={}
          height="520"
          style={{ border: "0", filter: "invert(1)" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default MapSec;

// import React from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// const MapSec = () => {
//   return (
//     <>
//       <Map zoom={14}>
//         {/* <Marker onClick={this.onMarkerClick} name={"Current location"} /> */}

//         {/* <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow> */}
//       </Map>
//     </>
//   );
// };

// // export default MapSec;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCHklvi7KSHWUx6uKSXtQMeaLEwgA6fw5U",
// })(MapSec);
