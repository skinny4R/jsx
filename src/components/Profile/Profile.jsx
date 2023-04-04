
import React from 'react'
const user = {name:"Draven" , role:"AD Carry"}

const Profile = () => {
  return (
    <div>
        <h1>
             My name is  {user.name} and im an {user.role}
              </h1>

    </div>
  );
};

export default Profile;