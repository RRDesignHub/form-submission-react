import { useState } from "react";

export default function Forms({children}){
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState(null);
  const handleFormSubmit = (event)=>{
    event.preventDefault();
    console.log(userName, userMail, userPassword)
  }

  const handleUserNameChange = (event)=>{
    setUserName(event.target.value)
  }

  const handleUserMailChange = (event)=>{
    setUserMail(event.target.value)
  }

  const handleUserPasswordChange = (event)=>{
    setUserPassword(event.target.value)
  }
  
  return (
    <>
      <form onSubmit={handleFormSubmit} className="border-4 w-fit mx-auto p-5 border-blue-700 rounded-2xl flex flex-col justify-center items-center gap-2">
        {children}
        <input
          onChange={handleUserNameChange}
         className="border-2 rounded-md border-gray-400 p-2 w-[400px]" type="text" name="userName"/>
        <input 
          onChange={handleUserMailChange}
          autoComplete="off"
          className="border-2 rounded-md border-gray-400 p-2 w-[400px]" type="email" name="userMail"/>
        <input 
          onChange={handleUserPasswordChange}
          className="border-2 rounded-md border-gray-400 p-2 w-[400px]" type="password" name="userPassword"/>
        <input className=" rounded-md bg-gray-400 p-2 w-[400px]" type="submit" value="Submit"/>
      </form>
    </>
  )
}