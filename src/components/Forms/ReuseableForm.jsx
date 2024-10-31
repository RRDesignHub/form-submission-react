export default function ReuseableForm({handleForms, children}){
  const handleLocalData = (event)=>{
    
    const formData ={
      name: event.target.userName.value,
      email: event.target.userMail.value,
      password: event.target.userPassword.value

    }
    handleForms(event, formData);
  }
  return (
    <>
      <form onSubmit={handleLocalData} className="border-4 w-fit mx-auto p-5 border-blue-700 rounded-2xl flex flex-col justify-center items-center gap-2">
        {children}
        <input className="border-2 rounded-md border-gray-400 p-2 w-[400px]" type="text" name="userName"/>
        <input autoComplete="off" className="border-2 rounded-md border-gray-400 p-2 w-[400px]" type="email" name="userMail"/>
        <input className="border-2 rounded-md border-gray-400 p-2 w-[400px]" type="password" name="userPassword"/>
        <input className=" rounded-md bg-gray-400 p-2 w-[400px]" type="submit" value="Submit"/>
      </form>
    </>
  )
}