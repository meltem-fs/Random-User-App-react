import React from 'react'
import mailSvg from "./assets/mail.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import "./index.css"

const Assets = ({ user ,getUser}) => {

    const{picture,name,email,phone,location,dob,registered}=user;


  return (
    <div className="main">
      <div className="part">
        <img src={picture?.large} alt="" />
        <p>
          {name.title} {name.first} {name.last}
        </p>
      </div>
      <div className="part">
        <img src={mailSvg} alt="" />
        <p>{email}</p>
      </div>
      <div className="part">
        <img src={phoneSvg} alt="" />
        <p>{phone} </p>
      </div>
      <div className="part">
        <img src={mapSvg} alt="" />
        <p>
          {location.state} {location.country}{" "}
        </p>
      </div>
      <p>bbbbbbbb</p>
      <p>vvvvvvvvv</p>
    </div>
  );
};

export default Assets