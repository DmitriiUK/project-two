import React from 'React'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class  RadioStationTracks extends React.Component {

  constructor() {
    super()

    this.state = {
      stationTracks: []
    }
  }

  getData() {
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/radio/${this.props.match.params.id}/tracks`, {
      params: {
        q: this.props.match.params.query
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({ stationTracks: res.data.data })
      })
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.getData()
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.stationTracks.map(track =>
              <li key={track.id}>
                <h4>{track.title}</h4>
                <audio src={track.preview} controls />
              </li>
            )}
          </div>
        </div>
      </section>

    )
  }


}

export default RadioStationTracks
