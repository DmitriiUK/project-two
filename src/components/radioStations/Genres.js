import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Genres extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      radioStations: []
    }
  }

  getData() {
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/radio/genres', {
      params: {
        q: this.props.match.params.query
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({ radioStations: res.data.data })
      })
  }

  componentDidMount(){
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
            {this.state.radioStations.map(radioStation =>

              <div
                key={radioStation.id}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Link to={`/radio/genres/${radioStation.id}`}>
                  <h1>{radioStation.title}</h1>

                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

    )
  }
}

export default Genres
