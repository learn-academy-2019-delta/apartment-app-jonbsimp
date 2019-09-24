import React from "react"
import PropTypes from "prop-types"
import {
  Jumbotron
} from "reactstrap"

class MainApp extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Jumbotron>
        <center><h1>Hello Jon</h1></center>
      </Jumbotron>
      </React.Fragment>
     
    );
  }
}

export default MainApp
