import React from "react";
import "./profile.css";
import "./testData";

export default function Profile(props) {
  const profile = props.profile;
  return (
    <div className='prof_card'>
      <strong style={{ color: "#eb7b28" }}>{profile.start}</strong>
      <img
        src={profile.image}
        alt=''
        style={{
          width: "100%",
          height: "225px",
          objectFit: "cover",
          borderRadius: "25PX 25PX 0PX 0PX",
        }}
      />
      <h1 className='prof_name' style={{ color: "#eb7b28" }}>
        {profile.Name}
      </h1>
      <h5 className='prof_role'>{profile.Role}</h5>
      <h5 className='prof_location'>{profile.Location}</h5>
      <p className='prof_date'> Joining Date: {profile.Joining_date}</p>
      <p className='prof_bio'>{profile.Bio}</p>
      <p>
        <button style={{ backgroundColor: "#0a7496", borderRadius: "25PX" }}>
          Contact
        </button>
      </p>
    </div>
  );
}
