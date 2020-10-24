import React, { Component } from 'react';
import profiles from '../../data/berlin.json';

export default class FaceBook extends Component {
  state = {
    data: profiles
  };


  render() {
/*     let type
    if (this.state.data.isStudent) {
        type = <p><b>Type: </b>Student</p>
    } else {
        type = <p><b>Type: </b>Teacher</p>
    } */

   
    return (
      <div className="flex-face">
        {this.state.data.map((item) => {
          return (
            <div className="flex-face" key={item.lastName}>
              <div>
                <img src={item.img} alt="" />
              </div>
              <div>
                <p><b>First name:</b> {item.firstName}</p>
                <p><b>Last name:</b> {item.lastName}</p>
                <p><b>Country:</b> {item.country}</p>
                <p><b>Type:</b> {item.isStudent ? "Student" : "Teacher"}</p>
                
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

/* return {item.isStudent} ?
                
<p>Type: Student</p>:
<p>Type: Teacher</p> */