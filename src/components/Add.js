import React,{useState} from 'react'
import {Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Employees from './Employees'


function Add() {
    const [name,setName] = useState('')
    const [salary,setSalary] = useState('')

    let history = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        const ids = uuid()
        let uniqueId = ids.slice(0,8)

        let a = name,
        b = salary

        Employees.push({id:uniqueId, name:a, salary:b})

        history('/')
    }
  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mg-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Name' required onChange={e=>setName(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Form.Group className='mg-3' controlId='formName'>
            <Form.Control type='text' placeholder='Enter Salary' required onChange={e=>setSalary(e.target.value)}>

            </Form.Control>
        </Form.Group>
        <Button onClick={e=>handleSubmit(e)} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Add
