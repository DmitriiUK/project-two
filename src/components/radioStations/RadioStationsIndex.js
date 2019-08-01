import React from 'react'
import { Link } from 'react-router-dom'
import RadioStationCard from './RadioStationCard'

import axios from 'axios'
import _ from 'lodash'

class RadioStationsIndex extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      radioStations: [],
      searchTerm: '',
      sortTerm: 'title|asc'
    }

    this.uniqueRadios = this.uniqueRadios.bind(this)
  }

  getData() {
    axios.get('https://cors-anywhere.herokuapp.com/api.deezer.com/radio', {
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

  uniqueRadios() {
    const uniqueStations = _.uniqBy(this.state.radioStations, this.state.radioStations.title)
    console.log(`Unique: ${uniqueStations}`)
    return uniqueStations
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.uniqueRadios().map(radioStation =>
              <div
                key={radioStation.id}
                className="column is-half-tablet is-one-quarter-desktop"
              >
                <Link to={`/radio/${radioStation.id}/tracks`}>
                  <RadioStationCard
                    title={radioStation.title}
                    picture={radioStation.picture_medium}
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

export default RadioStationsIndex

//{this.state.radioStations.map(radioStation =>
// {this.filterRadios().map(radioStation =>
// componentDidUpdate(prevProps) {
//   if(prevProps.location.pathname !== this.props.location.pathname) {
//     this.getData()
//   }
// }
//
// handleKeyUp(e) {
//   this.setState({ searchTerm: e.target.value })
// }
//
// handleChange(e) {
//   this.setState({ sortTerm: e.target.value })
// }
//
// filterRadios() {
//   const re = new RegExp(this.state.searchTerm, 'i')
//   const [field, order] = this.state.sortTerm.split('|')
//
//   const filterRadios = _.filter(this.state.radioStations, radio => {
//     return re.test(radio.title)
//   })
//   const sortedRadios = _.orderBy(filterRadios, [field], [order])
//
//   return sortedRadios
// }
// this.handleKeyUp = this.handleKeyUp.bind(this)
// this.handleChange = this.handleChange.bind(this)
// this.filterRadios = this.filterRadios.bind(this)
// <div className="column">
//   <div className="field">
//     <input placeholder="search genre..." className="input" onKeyUp={this.handleKeyUp} />
//   </div>
// </div>
