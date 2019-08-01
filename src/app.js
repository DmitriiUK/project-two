import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import RadioStationsIndex from './components/radioStations/RadioStationsIndex'
import RadioStationsShow from './components/radioStations/RadioStationsShow'
import RadioStationTracks from './components/radioStations/RadioStationTracks'
import Home from './components/pages/Home'

import 'bulma'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar />

        <Switch>
          <Route path="/radio/:id/tracks" component={RadioStationTracks} />
          <Route path="/radio/:id" component={RadioStationsShow} />
          <Route path="/radio" component={RadioStationsIndex} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)







// import React from 'react'
// import ReactDOM from 'react-dom'
// import { HashRouter, Route, Link } from 'react-router-dom'
// import axios from 'axios'
//
// import RadioCard from './components/RadioCard'
//
// import 'bulma'
//
// class App extends React.Component {
//
//   constructor() {
//     super()
//     console.log('Hello from constructor')
//     this.state = { radio: [] }
//
//   }
//
//   componentDidMount() {
//     fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio/')
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ radio: data.data })
//         console.log(data.data)
//       })
//
//   }
//
// render() {
//   console.log('rendering')
//   return (
//     <section className="section">
//       <div className="columns is-multiline">
//         {this.state.radio.map(station =>
//           <div className="column is-half-tablet is-one-quarter-desktop" key={station.id}>
//             <RadioCard
//               title={station.title}
//               type={station.type}
//               picture={station.picture}
//               pictureMedium={station.picture_medium}
//               tracklist={station.tracklist}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   )
// }

// render() {
//   return(
//     <div>
//       {this.state.radio.map(station => <h2 key={station.id}>{station.title}</h2>)}
//       {this.state.radio.map(station => <img key={station.id} src={station.picture} />)}
//     </div>
//   )
// }
// }
//
//
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

//

// axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/radio')
//   .then(res => this.setState({ radios: res.data }))
