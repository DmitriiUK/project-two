import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Index from './components/radioStations/Index'
import Top from './components/radioStations/Top'
import Lists from './components/radioStations/Lists'
import Tracks from './components/radioStations/Tracks'
import Home from './components/pages/Home'

import 'bulma'
import './style.scss'

class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <Navbar />

        <Switch>
          <Route path="/radio/top" component={Top} />
          <Route path="/radio/lists" component={Lists} />
          <Route path="/radio/:id/tracks" component={Tracks} />
          <Route path="/radio" component={Index} />
          <Route path="/" component={Home} />
        </Switch>

        <Footer />
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
