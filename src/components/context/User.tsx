import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
  const userContext = useContext(UserContext)

  const loginHandler = () => {
    userContext.setUser({
      name: 'Diego',
      email: 'diego1006@gmail.com'
    })
  }
  
  const logoutHandler = () => {
    userContext.setUser(null)
  }
  
  return (
    <div>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  )
}