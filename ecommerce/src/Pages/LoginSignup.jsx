import React, { useState } from 'react'
import './CSS/loginSignUp.css'

export const LoginSignup = () => {

        const [state,setState] = useState("Login");
        const [formData,setFormData]= useState({
          username:"",
          email:"",
          password:""

        })

        const changeHandler = (e)=>{
          setFormData({...formData,[e.target.name]:e.target.value})
        }

        const login = async ()=>{
            console.log("Login Function Executed",formData);

            let responseData;
            await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/login`,{
              method:'POST',
              headers:{
                Accept:'application/form-data','Content-Type':'application/json',
              },
              body:JSON.stringify(formData),
            }).then((Response)=>Response.json()).then((data)=>responseData=data)

            if(responseData.success){
              localStorage.setItem('auth-token',responseData.token);
              window.location.replace("/");
            }
            else{
              alert(responseData.errors)
            }

        }
        const signup = async ()=>{
            console.log("Sign up Function Executed",formData);

            let responseData;
            await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/signup`,{
              method:'POST',
              headers:{
                Accept:'application/form-data','Content-Type':'application/json',
              },
              body:JSON.stringify(formData),
            }).then((Response)=>Response.json()).then((data)=>responseData=data)

            if(responseData.success){
              localStorage.setItem('auth-token',responseData.token);
              window.location.replace("/");
              window.location.replace("/dashboard");
            }
            else{
              alert(responseData.errors)
            }
        }

       
  return (
    <div className='loginSignup'>
      <div className="loginSignup-container">
        <h1>{state}</h1>
        <div className="loginSignUp-Field">
          {state==="Sign up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Enter Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Enter Email Address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Enter Password'/>
        </div>
        <button onClick={()=>{state==="Login"? login():signup()}}>Continue</button>
        { state==="Sign up"
        ? <p className="LiginSignUp-login">Already have an account ?<span onClick={()=>{setState("Login")}}> Login Here</span></p> : 
        <p className="LiginSignUp-login">Create  an account ?<span onClick={()=>{setState("Sign up")}}> Click Here</span></p> }
      
        <div className="loginSignUp-agree">
          <input type="checkbox" name='' id='' />
          <p>I agree to the tearms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
