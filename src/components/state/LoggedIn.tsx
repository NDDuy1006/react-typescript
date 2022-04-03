import { useState } from "react"

export const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const LoginHandler = () => {
    setIsLoggedIn(true)
   }
  const LogoutHandler = () => {
    setIsLoggedIn(false)
   }
  return (
    <div>
      <button onClick={LoginHandler}>Login</button>
      <button onClick={LogoutHandler}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}