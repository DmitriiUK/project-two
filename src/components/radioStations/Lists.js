import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import axios from 'axios'

class Lists extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      radioStations: []
    }
  }

  getData() {
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/radio/lists?index=25', {
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
                <Link to={`/radio/lists?index=25/${radioStation.id}`}>

                  <Card
                    title={radioStation.title}
                    picture={radioStation.picture}
                  />

                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

    )
  }
}

export default Lists
