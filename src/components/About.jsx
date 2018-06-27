import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div>
          <label>Name</label>
        <input type="text" name="name" value="anjali"/>
        <label>Phone number</label>
        <input type="number" name="phno" value="8074650405"/>
        <label>Place</label>
        <input type="text" name="place" value="Banglore"/>
        <button >Submit</button>

      </div>
    )
  }
}
export default About;
