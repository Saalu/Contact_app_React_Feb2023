import React ,{Fragment} from 'react'
import {Button,Table} from 'react-bootstrap'
// import "bootstrap/dist/css/bootstrap.min.css"
import Employees from '../components/Employees'

function Home() {
    console.log(Employees)

  return (
    <Fragment>
      <div style={{margin:"10rem"}}>
        
        <Table striped borded hover size='sm'>
            <thead>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Salary
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    Employees && Employees.length > 0 
                    ?
                    Employees.map(item =>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                            </tr>
                        )
                    }):
                    "No data available"

                }
            </tbody>
        </Table>

      </div>
    </Fragment>
  )
}

export default Home
