import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import RadioStationsIndex from './components/radioStations/RadioStationsIndex'
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
