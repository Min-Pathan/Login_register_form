import React from 'react'
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com'
const ForgotPassword = (props) => {
    const sendMail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_j5zv4hg', 'template_4jzepdg', e.target, 'vQ8F5-ZlsVRu_0lrH')
          .then((result) => {
              console.log(result.text);
              alert("sent successfully")
          }, (error) => {
              console.log(error.text);
              alert("msg not sent");
          });
          props.showAlert("Email sent", "success")
      };
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
            <h5 className="card-title text-center mb-5 fw-light fs-5">Forgot Password</h5>
            <form onSubmit={sendMail}>
            <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" 
                     name="name" autoComplete='off'/>
                    <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                  <input type="email" className="form-control"
                   placeholder="Email" required autoComplete='off' name='user_email'/>
                  <label htmlFor="user_email">Email address</label>
              </div>                          
            <hr/>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Reset</button>
              </div>            
            </form>
          </div>
          <div className="text-center py-4">
                <Link to="/login" className="text-dark pt-5">Sign-in</Link>
            </div>
          <div>            
        </div>
        </div>
      </div>
      <div>
    </div>
    </div>
    </div>
  )
}

export default ForgotPassword
