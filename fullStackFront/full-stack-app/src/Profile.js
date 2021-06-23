import React, { Component } from "react";
 
class Profile extends Component {
  render() {
    return (
      <div>
        <h2>CRUD</h2>
        <p>This endpoint are fully functional, you can test them running the Nodejs application</p>
        <ul>
          <li>
            <label>POST</label>
            <p>localhost:3000/post</p>
            <p>Request body:
               id : 0
               postContent : "First Text"
            </p>
          </li>
          <li>
            <label>GET</label>
            <p>localhost:3000/post</p>
            <p>Request body:
               id : 0
            </p>
          </li>
          <li>
            <label>PATCH</label>
            <p>localhost:3000/post</p>
            <p>Request body:
               id : 0
               postContent : "Updated Text"
            </p>
          </li>
          <li>
            <label>DELETE</label>
            <p>localhost:3000/post</p>
            <p>Request body:
               id : 0
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Profile;