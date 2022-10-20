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
        <img className="user-pic" src={picture?.large} alt="" />
        <h3>
          {name?.title} {name?.first} {name?.last}
        </h3>
      </div>
      <div className="part">
        <img className="user-p" src={mailSvg} alt="" />
        <p>{email}</p>
      </div>
      <div className="part">
        <img className="user-p" src={phoneSvg} alt="" />
        <p>{phone} </p>
      </div>
      <div className="part">
        <img className="user-p" src={mapSvg} alt="" />
        <p>
          {location?.state} {location?.country}{" "}
        </p>
      </div>
      <p className="par">Age:{dob?.age} </p>
      <p className="par">Registered Date:{registered?.date}</p>
      <button className='btn' onClick={() => getUser()}>Random User</button>
    </div>
  );
};

export default Assets