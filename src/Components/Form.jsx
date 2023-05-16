import React, {useState} from 'react'

export default function Form() {
    const [userName, setUsername] = useState('')
    const [userDetails, setUserDetails] = useState('')


    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const handleUserDetailsChange = (e) => {
        setUserDetails(e.target.value)
    }



  return (
   <div>
    <form>
        <input type="text" name="username" value={userName} onChange={handleChange} />
        {/* display the name in the input field on the screen once the user types in the input field */}
        <p>Username is: {userName}</p>

        <textarea name="user-details" cols="30" rows="10" value={userDetails} onChange={handleUserDetailsChange}></textarea>
        {/* display the user details in the textarea on the screen once the user types in the textarea */}
        <p>User details are: {userDetails}</p>


    </form>
   </div>
  )
}

