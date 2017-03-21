import React, { Component } from 'react'

import Header from './head/header'
import MeetupList from './meetup/meetupList'

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <MeetupList />
      </div>
    )
  }
}

export default Home
