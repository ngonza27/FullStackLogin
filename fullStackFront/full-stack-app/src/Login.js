import React from "react";
import {useHistory} from "react-router-dom"

function Login() {
  const [state, setState] = React.useState({}) 
  const history = useHistory()
  function handleChange (event) {
    setState({ ...state, [event.target.name]: event.target.value});
  }

  function handleSubmit (event) {
    event.preventDefault();

    fetch('http://localhost:4000/api/auth/signin', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',  
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },       
        body: JSON.stringify(state)
      }).then(async function(response) {
        const res = await response.json()
        // Display the key/value pairs
        if(res.token) {
          history.push('/profile') 
        } else {
          alert("Email or Password are incorrect")
        }
        return res;
      });

  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
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
 
export default Login;