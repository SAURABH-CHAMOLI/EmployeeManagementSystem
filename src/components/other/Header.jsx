import React from 'react'

const Header = ({firstName,changeUser}) => {

    const logOut=()=>{
        localStorage.setItem("loggedInUser","");
        changeUser('')
    }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold'> {firstName} 👋</span></h1>
      <button onClick={logOut} id='logout' className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log out</button>
    </div>
  )
}

export default Header
