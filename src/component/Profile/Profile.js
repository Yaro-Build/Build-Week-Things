import React from "react";
import "./profile.css";
import "./testData";
import InfoModal from "./modal";

export default function Profile(props) {
  const profile = props.profile;

  return (
    <div class='prof_card'>
      {profile.img ? (
        <img src={profile.img} alt='profile image' className='profile-image' />
      ) : (
        <img
          src='./unknown.png'
          alt='profile image'
          className='profile-image'
        />
      )}
      <h1 className='prof_name' style={{ color: "#eb7b28" }}>
        {profile.name}
      </h1>
      <h5 className='prof_role'>{profile.job_title}</h5>
      <h5 className='prof_location'>{profile.location}</h5>
      <p className='prof_date'> Joining Date: {profile.start_date}</p>
      <p className='prof_bio'>{profile.bio}</p>
      <p>
        <InfoModal profile={profile} />
      </p>
    </div>
  );
}

