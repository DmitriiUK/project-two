import React from 'React'
import axios from 'axios'

class Tracks extends React.Component {

  constructor() {
    super()

    this.state = {
      stationTracks: []
    }

    this.convertSeconds = this.convertSeconds.bind(this)
  }

  getData() {
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/radio/${this.props.match.params.id}/tracks`)
      .then(res => {
        console.log(res.data)
        this.setState({ stationTracks: res.data.data })
      })
  }

  componentDidMount() {
    this.getData()
  }


  convertSeconds(duration) {
    const minutes = Math.floor(duration / 60)
    const secs = duration % 60
    if(secs < 10) {
      return duration = `${minutes}:0${secs}`
    } else {
      return duration =`${minutes}:${secs}`
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
                  <figure >

                    <div className="columns is-multiline">
                      <div className="column" >
                        <img src={track.album.cover_big} />
                      </div>
                      <div className="column">
                        <h4>title</h4>
                        <hr />
                        <h4>{track.title}</h4>
                      </div>
                      <div className="column">
                        <h4>artist</h4>
                        <hr />
                        <h4>{track.artist.name}</h4>
                      </div>
                      <div className="column">
                        <h4>album</h4>
                        <hr />
                        <h4>{track.album.title}</h4>
                      </div>
                      <div className="column">
                        <h4>duration</h4>
                        <hr />
                        <h4>{this.convertSeconds(track.duration)}</h4>
                      </div>
                    </div>
                    <div className="audio">
                      <audio src={track.preview} controls />
                    </div>


                  </figure>
                  <hr />
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
