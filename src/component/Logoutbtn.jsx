import React from 'react'
import {auth} from "../config/firebase"
import { signOut   } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Logoutbtn = ({collapsed}) => {
  const navigate=useNavigate()
  function signout(){
      signOut(auth).then(() => {
        navigate("/login")
    // Sign-out successful.
  }).catch((error) => {
    console.log(error);
    
  });
  
  
    }
  return (
    <button className={`ml-auto ${collapsed ? '' : ''} text-sm text-indigo-600 cursor-pointer`} onClick={signout}>Logout</button>
  )
}

export default Logoutbtn
