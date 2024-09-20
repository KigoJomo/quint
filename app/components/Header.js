import React from 'react'

const Header = () => {

  return (
    <header className="w-screen h-[10vh] px-4 flex items-center justify-between">
      <div className="menu-button w-6 flex flex-col gap-2">
        <span className="w-1/2 h-[2px] rounded-full bg-primary"></span>
        <span className="w-full h-[2px] rounded-full bg-primary"></span>
      </div>

      <p className="logo yeseva capitalize text-2xl">quint.</p>

      <div className="icons flex items-center gap-4"></div>

    </header>
  )
}

export default Header
