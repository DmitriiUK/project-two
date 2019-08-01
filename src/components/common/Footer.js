import React from 'react'
import { withRouter } from 'react-router-dom'

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>SEI-Project 2</strong> by <a href="#">Chris Beaney </a> & <a href="#">Dmitrii Solomatin </a>.
          </p>

          <p>
            <a href="https://developers.deezer.com/api">Powered by Deezer API</a>
          </p>
        </div>
      </footer>
    )
  }
}

export default withRouter(Footer)
