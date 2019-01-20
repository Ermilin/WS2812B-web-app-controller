import React from 'react'
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)


export default class Calendar extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={[]}
      />
    )
  }
}
