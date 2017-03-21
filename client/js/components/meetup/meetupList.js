import React, { Component } from 'react'

class MeetupList extends Component {

  renderMeetups(meetup) {

  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>Open Meetups</td>
          </tr>
        </thead>
        <tbody>
          {this.props.openMeetups.map(this.renderMeetups.bind(this))}
        </tbody>
      </table>
    )
  }
}

export default MeetupList
