import React from "react";
import {useHistory} from "react-router-dom"

function Register() {
  const [state, setState] = React.useState({}) 
  const history = useHistory()
  function handleChange (event) {
    setState({ ...state, [event.target.name]: event.target.value});
  }

  function handleSubmit (event) {
    event.preventDefault();
    
    fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',  
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'Access-Control-Expose-Headers': 'Authorization'
        },       
        body: JSON.stringify(state)
      }).then(async function(response) {
        // Display the key/value pairs
        const res = await response.json()
        // Display the key/value pairs
        if(res.token) {
          alert("Registrattion successful")
          history.push('/')
        } 
        return res;
      });
  }
 
  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={state.value} name="username" onChange={handleChange}/>
          </label>
          <br/>
          <label>
            Email:
            <input type="email" value={state.value} name="email" onChange={handleChange}/>
          </label>
          <br/>
          <label>
            Password:
            <input type="password" value={state.value} name="password" onChange={handleChange} />
          </label>
          <br/>
          <div class="align-right">
          <input type="submit" value="Submit" />
          </div>
      </form>
    </div>
  );
}
 

export default Register;