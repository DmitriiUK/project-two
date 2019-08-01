import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class RadioStationsShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      radioStation: null
    }

  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/radio/${this.props.match.params.id}`)
      .then(res => this.setState({ radioStation: res.data }))
  }

  render() {
    if(!this.state.radioStation) return null
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <Link to={`${this.props.match.params.id}/tracks`} >
            <h1>{this.state.radioStation.description}</h1>
            <h2>{this.state.radioStation.title}</h2>
            <figure>
              <img src={this.state.radioStation.picture} alt={this.state.radioStation.title}/>
            </figure>
            <h3>{this.state.radioStation.tracklist}</h3>
          </Link>
        </div>
      </section>

    )
  }
}

export default RadioStationsShow
