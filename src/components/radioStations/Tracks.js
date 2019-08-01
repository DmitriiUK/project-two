import React from 'React'
import axios from 'axios'
// import { Link } from 'react-router-dom'

class Tracks extends React.Component {

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
            <ol>

              {this.state.stationTracks.map(track =>
                <li key={track.id}>
                  <figure>
                    <div className="column">
                      <div className="column" >
                        <img src={track.album.cover} />
                        <div className="columns is-multiline">
                          <div className="column">
                            <h4>TITLE</h4>
                            <h4>{track.title}</h4>
                          </div>
                          <div className="column">
                            <h4>ARTIST</h4>
                            <h4>{track.artist.name}</h4>
                          </div>
                          <div className="column">
                            <h4>ALBUM</h4>
                            <h4>{track.album.title}</h4>
                          </div>
                          <div className="column">
                            <h4>DURATION</h4>
                            <h4>{track.duration}</h4>
                          </div>
                        </div>
                        <div className="column is-full-desktop">
                          <audio src={track.preview} controls />
                        </div>
                      </div>
                    </div>
                  </figure>
                </li>
              )}

            </ol>
          </div>
        </div>
      </section>
    )
  }
}

export default Tracks
