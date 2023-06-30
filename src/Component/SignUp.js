import React, {  useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const SignUp=(props)=> {
    const [userRegister, setUserRegister] = useState({
        name1: "",
        email: "",
        password: "",
        number: ""
    });
    const [records, setRecords] = useState([]);
    const handleInput = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        setUserRegister({...userRegister, [name]: value}) //dynamic data in []        
    } 
    
    //const nav = useNavigate();
    const SubmitHandle = (e) =>
    {        
        e.preventDefault();         
        const newRecords = {...userRegister, id: new Date().getTime().toString()}  //id for unique key values        
        console.log(records);
        setRecords([...records, newRecords]) //old data stored in ...records and new data in newRecords
        console.log(records);
        setUserRegister({name1:"", email:"", number:"", password:""});
        props.showAlert("Registered Successfully", "success")
        //nav('/login');
    }
   const RemoveEle=(id)=>
   {
        const myNewData = records.filter((e)=>{
            return e.id !== id;
        })
        setRecords(myNewData);
   }
   let myStyle={
        backgroundColor: props.mode==='light'?'white':'white', 
        color: props.mode==='light'?'black':'black'
    }
  return (    
    <div className="container h-100" >
    <div className="row justify-content-sm-center h-100">
      <div className="col-xxl-4 col-xl-5 col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-2 shadow rounded-3 my-5" style={myStyle}>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-light fs-10">Sign Up</h5>
            <form onSubmit={SubmitHandle} >
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name1" placeholder="Full Name" required
                    value={userRegister.name1} onChange={handleInput} name="name1" autoComplete='off'/>
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="email" placeholder="Email" required
                    value={userRegister.email} onChange={handleInput} name="email" autoComplete='off'/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="number" placeholder="Number" required
                    value={userRegister.number} onChange={handleInput} name="number" autoComplete='off'/>
                    <label htmlFor="number">Number</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" required
                    value = {userRegister.password} onChange={handleInput} name="password" autoComplete='off'/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign Up</button>
                </div>    
            </form>
            <div className="text-center py-4">
                Already have an account? <Link to="/login" className="text-dark">Sign-in</Link>
            </div>            
          </div>           
        </div> 
        <div>
            {
                records.map((ele)=>
                {
                    const {id, name1, email, number, password} = ele;
                    return(                                           //for multiple elements
                        <h3 className='h1style'>
                            Name: {name1} <br/>
                            Email:{email} <br/>
                            Number:{number} <br/>
                            Password{password} <br/>
                            <button className='btnInner' onClick={()=> RemoveEle(id)}>remove</button>
                        </h3>
                    )
                })
            }
        </div>       
       </div>
    </div>
</div> 
  )
}

export default SignUp
