import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Employees from './Employees'
import { useEffect } from 'react';


function Update() {
    const [name,setName] = useState('')
    const [salary,setSalary] = useState('')
    const [id,setId] = useState('')

    let history = useNavigate()

    var index = Employees.map(function(e){
            return e.id
        }).indexOf(id)      

    const handleSubmit = e => {
        e.preventDefault()

        let a = Employees[index];
        a.name = name;
        a.salary=salary

        history('/')
    }

    useEffect(()=>{
        setName(localStorage.getItem('name'))
        setSalary(localStorage.getItem('salary'))
        setId(localStorage.getItem('id'))
    },[])
  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mg-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Name' value={name} required onChange={e=>setName(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Form.Group className='mg-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Salary' value={salary} required onChange={e=>setSalary(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Button onClick={e=>handleSubmit(e)} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Update
