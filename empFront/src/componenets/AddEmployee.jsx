import React from 'react'
import { useState } from 'react'
import {FormGroup,FormControl,InputLabel,Input,styled, Typography, Button} from "@mui/material"
import { addUser } from '../service/api'
import {useNavigate} from 'react-router-dom'

const Container=styled(FormGroup)`
    width: 50%;
    margin:5% auto 0 auto;
    &>div{
      margin-top:20px
    }
`
const defaultValues={
  name:"",
  username:"",
  email:"",
  phone:""
}
export default function AddEmployee() {

  const navigate=useNavigate();
const [user, setUser] = useState(defaultValues)
const  onValueChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value})
  console.log(user);
}
const addUserDetails= async ()=>{
    await addUser(user)
    navigate('/AllEmployees')
}


  return (
    <div>
      <Container>
        <Typography variant='h4'>Add Employee</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e)=> onValueChange(e)} name='name'/>
        </FormControl>
     
  
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input onChange={(e)=> onValueChange(e)} name='username'/>
        </FormControl>
     
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e)=> onValueChange(e)} name='email'/>
        </FormControl>
   
    
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e)=> onValueChange(e)} name='phone'/>
        </FormControl>
        <FormControl>
          <Button variant='contained' onClick={()=>addUserDetails()}>Add employee</Button>
        </FormControl>
      </Container>
      
    </div>
  )
}
