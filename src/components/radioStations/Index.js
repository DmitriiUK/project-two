import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import axios from 'axios'

class Index extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      radioStations: []
    }
  }

  getData() {
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/radio')
      .then(res => {
        console.log(res.data)
        this.setState({ radioStations: res.data.data })
      })
  }

  componentDidMount(){
    this.getData()
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
                <Link to={`/radio/${radioStation.id}/tracks`}>
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

export default Index
