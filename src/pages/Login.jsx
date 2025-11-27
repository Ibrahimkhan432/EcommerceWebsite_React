import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
 import {auth} from "../config/firebase"
import { signInWithEmailAndPassword ,onAuthStateChanged ,signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

const Login = () => {
const navigate=useNavigate()
const provider = new GoogleAuthProvider();


onAuthStateChanged(auth, (user) => {
  if (user) {

    const uid = user.uid;
    console.log(uid);
    
    // ...
  } else {
    navigate("/login")
    // User is signed out
    // ...
  }
});


function google_login() {
  signInWithPopup(auth, provider)
    .then((result) => {
      navigate("/"); 
    })
    .catch((error) => {
      console.log(error.code, error.message);
    });
}
const [lemail, setEmail] = useState("");
const [lpassword, setPassword] = useState("");
const [error, setError] = useState("");

function handle_login_email(e){
setEmail(e.target.value)
console.log("rewfvrwe");

}
function handle_login_password(e){
  setPassword(e.target.value);
}
  const handleLogin = (e) => {
    signInWithEmailAndPassword(auth, lemail, lpassword)
.then(() => {
  // Signed in 
  navigate("/")
  setEmail('')
  setPassword('')
  // ...
})
.catch((error) => {
  console.log(error);
  
});
    e.preventDefault();
    setEmail(e.target.value)
    setPassword(e.target.value)

    // Email regex for basic validation
    const emailPattern = /\S+@\S+\.\S+/;

    return lemail.trim() === ""
      ? setError("Please enter your email.")
      : !emailPattern.test(lemail)
      ? setError("Please enter a valid email address.")
      : lpassword.trim() === ""
      ? setError("Password cannot be empty.")
      : lpassword.length < 6
      ? setError("Password should be at least 6 characters.")
      : (setError(""), (window.location.href = "/"));
  };



  return (
    <>
      <div className="flex h-[700px] w-full border-none text-black">
        <div className="w-full flex flex-col items-center justify-center border">
          <form
            onSubmit={handleLogin}
            className="md:w-96 w-80 flex flex-col items-center justify-center"
          >
            <h2 className="text-4xl text-gray-900 font-medium">Login</h2>
            <p className="text-sm text-gray-600/90 mt-3">
              Welcome back! Please sign in to continue
            </p>

            <button
              type="button"
              onClick={google_login}
              className="w-full mt-8 bg-gray-500/10 cursor-pointer flex items-center justify-center h-12 rounded-full border-2 border-black hover:translate-y-1 transition-all"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="googleLogo"
              />
            </button>

            <div className="flex items-center gap-4 w-full my-5 cursor-pointer">
              <div className="w-full h-px bg-gray-900/90"></div>
              <p className="w-full text-nowrap text-sm text-gray-500/90">
                or sign in with email
              </p>
              <div className="w-full h-px bg-gray-900/90"></div>
            </div>

            
            <div className="flex items-center w-full bg-transparent border border-gray-600/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <input
                type="email"
                placeholder="Email id"
                value={lemail}
                onChange={(e) => handle_login_email(e)}
                className="bg-transparent text-gray-500/80 placeholder-gray-600/80 outline-none text-sm w-full h-full"
              />
            </div>

           
            <div className="flex items-center mt-6 w-full bg-transparent border border-gray-600/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <input
                type="password"
                placeholder="Password"
                value={lpassword}
                onChange={(e) => handle_login_password(e)}
                className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
              />
            </div>

           
            {error && (
              <p className="text-red-700 text-sm mt-3">{error}</p>
            )}

            <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
              <div className="flex items-center gap-2">
                <input className="h-5" type="checkbox" id="checkbox" />
                <label className="text-sm" htmlFor="checkbox">
                  Remember me
                </label>
              </div>
              <a className="text-sm underline" href="#">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
            >
              Login
            </button>

            <p className="text-gray-700/90 text-sm mt-4 cursor-pointer">
              Don't have an account?
              <Link to={"/signup"}> Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
