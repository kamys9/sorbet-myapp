// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup } from 'react-map-gl';
import * as glaciers from "./glaciers.json";
let REACT_APP_MAPBOX_TOKEN = "pk.eyJ1Ijoia2FtaWtvIiwiYSI6ImNrcWkwOHBndzAweDEybnBkaGlkcmJnZDQifQ.R3oBs5JyIkxfdjUpV3tMYg"

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 50.8465573,
    longitude: 4.351697,
    width: '550px',
    height: '500px',
    zoom: 10
  });
  const [selectedGlacier, setSelectedGlacier] = useState(null);
  return <div>
    <ReactMapGL {...viewport} 
    mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
    mapStyle="mapbox://styles/kamiko/ckq0pnb8a1e4s17s2nykqwjzh"
    onViewportChange={viewport => {
      setViewport(viewport);
    }}>
      {glaciers.businesses.map((icparlour) => (
        <Marker 
        key={icparlour.name} 
        latitude={icparlour.coordinates.latitude}
        longitude={icparlour.coordinates.longitude}>
          <button className='marker-btn' onClick={(e) => {
            e.preventDefault();
            setSelectedGlacier(icparlour);
          }}>
            <img className='marker-img' src= "./marker.png"  alt="marker icon"/>
          </button>
        </Marker>
      ))}

      {selectedGlacier ? (
         <Popup 
         latitude={selectedGlacier.coordinates.latitude} 
         longitude={selectedGlacier.coordinates.longitude}
         onClose={() => {
           setSelectedGlacier(null);
         }}
         >
           <div>
             <h4>{selectedGlacier.name} </h4>
             <p>{selectedGlacier.location.display_address}</p>
             <p><a href={selectedGlacier.url}  >More info</a></p>

            
             
           </div>
         </Popup>
      ) : null}
    </ReactMapGL>
  </div>
}



const domContainer = document.querySelector('#react-map');
// ReactDOM.render(e(LikeButton), domContainer);