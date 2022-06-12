import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { AiOutlineFileDone, AiOutlineUnlock } from "react-icons/ai";
const Login = () => {


  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();


  const submit = data => {
    axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
      .then(res => {
        localStorage.setItem("token", res.data.data.token)
        navigate("/")
        alert('User login!!')
      })
      .catch(error => {
        console.log(error.response.status)
        if (error.response.status === 404) {
          alert('incorrect password ')
        }
      })


  }

  return (
    <div className='position-absolute top-50 start-50 translate-middle'>

      <h3 className='text-center'>Welcome! Enter your email and password to continue</h3>

      <div className="text-data text-center">
        <h4 >test data</h4>
        <p className='data-info'><AiOutlineFileDone /> kevinedk@gmail.com </p>
        <p className='data-info'><AiOutlineUnlock /> kevin1234 </p>
      </div>



      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" {...register("email")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" {...register("password")} className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary ">Submit</button>
      </form>
    </div>
  )
}

export default Login