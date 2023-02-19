import React ,{Fragment} from 'react'
import {Button,Table} from 'react-bootstrap'
import {Link, useNavigate } from 'react-router-dom'
import Employees from '../components/Employees'
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    let history = useNavigate()

   const handleDelete = (id) =>{
    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id)
   
    Employees.slice(index,1)

    history('/')
}

const handleEdit = (id, name, salary)=>{
    localStorage.setItem('name',name)
    localStorage.setItem('salary',salary)
    localStorage.setItem('id',id)
}

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
                    <th>
                        Actions
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
                                <td>
                                    <Link to={`/edit`}>

                                    <Button onClick={() =>handleEdit(item.id, item.name,item.salary)}>UPDATE</Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                </td>
                            </tr>
                        )
                    }):
                    "No data available"

                }
            </tbody>
        </Table>
        <br>
        </br>
            <Link className='d-grid gap-2' to='/create'>
                <Button size='lg'>Create</Button>
            </Link>
      </div>
    </Fragment>
  )
}

export default Home
