import "../../assets/css/login-signup-popup.scss"

export const Login_SignUp_Comp = () =>{
  return(
    <div className="Login-Signup-btn">
      <div></div>
      <button className="lgn-sgn-btn">
        <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_18_11)">
          <path d="M43.75 24.6667V18.5C43.75 16.8645 43.0915 15.296 41.9194 14.1395C40.7473 12.983 39.1576 12.3333 37.5 12.3333H15.625C13.9674 12.3333 12.3777 12.983 11.2056 14.1395C10.0335 15.296 9.375 16.8645 9.375 18.5V55.5C9.375 57.1355 10.0335 58.704 11.2056 59.8605C12.3777 61.017 13.9674 61.6667 15.625 61.6667H37.5C39.1576 61.6667 40.7473 61.017 41.9194 59.8605C43.0915 58.704 43.75 57.1355 43.75 55.5V49.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M62.5 37H21.875M21.875 37L31.25 27.75M21.875 37L31.25 46.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_18_11">
          <rect width="75" height="74" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        Login
      </button>
      <button className="lgn-sgn-btn">Submit</button>
    </div>
  )
}