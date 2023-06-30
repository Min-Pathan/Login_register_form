import React, { useState } from 'react'
import { Link } from "react-router-dom";
//import {useNavigate} from "react-router-dom"

const Login=(props)=> 
{
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const [entry, setEntry] = useState([])
  //const nav = useNavigate();

  const submitLogin=(e)=>{
      e.preventDefault();
      const newEntry = {email: email, pass: pass};
      setEntry([...entry, newEntry])
      console.log(entry)
      // let em = localStorage.getItem('email');
      // let p = localStorage.getItem('password');

      // if(email===em && pass === p)
      // {
      //   console.log("successfully logged in");
      //   nav('/');       
      // }
      // else
      // {
      //   console.log("unsuccess");
      // }    
      props.showAlert("Logged Successfully", "success")
  }
  let myStyle={
    backgroundColor: props.mode==='light'?'white':'white', 
    color: props.mode==='light'?'black':'black'
}  
 return (
   <div className="container h-100">
    <div className="row justify-content-sm-center h-100">
      <div className="col-xxl-4 col-xl-5 col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5" style={myStyle}>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
            <form onSubmit={submitLogin}>
              <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="email" value={email}
                  onChange={(e) => setEmail(e.target.value)} placeholder="Email" required autoComplete='off' name='email'/>
                  <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="password" value={pass}
                  onChange={(e) => setPass(e.target.value)} placeholder="Password" required autoComplete='off' name='pass'/>
                  <label htmlFor="password">Password</label>
              </div>

              <div className="d-flex align-items-center">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="remember"/>                
                    <label htmlFor="remeber" className="form-check-label">Remember me</label>                                  
                </div>
                <Link to="/forgot_password" className='ms-auto'>Forgot Password</Link>                 
            </div>
            <hr/>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign in</button>
              </div>            
            </form>
          </div>
          <div className="text-center py-4">
                {/* Don't have an account? <Link to="/signup" className="text-dark">Create One</Link> */}
            </div>
          <div>            
        </div>
        </div>
      </div>
      <div>
        {
          entry.map((e)=>{
            return(
              <div>
                <p>{e.email}</p>
                <p>{e.pass}</p>
                </div>
            )
              
          })
        }
      </div>
    </div>
  </div>

  )
}

export default Login
