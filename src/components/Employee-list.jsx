import React, { Component } from 'react'


class Employee extends Component {
    constructor(props){
        super(props)
        this.state={
            employee:[
                {
                    id:"123",
                    Name:"pushpa",
                    Place:"Banglore"
                },
                {
                    id:"456",
                    Name:"sanjana",
                    Place:"guntakal"
                },
                {
                    id:"789",
                    Name:"anjali",
                    Place:"ballery"
                }
            ]
        }
    }
  render() {
      const emprow=this.state.employee.map(e=>{
        return (
            <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.Name}</td>
            <td>{e.Place}</td>
            </tr>
        )
  });
    return (
      <div>
        <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>place</th>
                </tr>
            <tr>
                <tbody>{emprow}</tbody>
                
            </tr>
            </table>


      </div>
    )
  }
}
export default Employee
