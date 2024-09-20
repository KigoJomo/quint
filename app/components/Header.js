import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const Icons = [
    SearchIcon, LocalMallIcon, PersonIcon
  ]

  return (
    <header className="w-full h-[10vh] flex items-center justify-between border-b border-[#462C18] border-opacity-50">
      <div className="w-1/3 ">
        <div className="menu-button w-6 flex flex-col gap-2">
          <span className="w-1/2 h-[2px] rounded-full bg-primary"></span>
          <span className="w-full h-[2px] rounded-full bg-primary"></span>
        </div>
      </div>

      <p className="logo w-1/3 text-center yeseva capitalize text-2xl md:text-4xl ">quint.</p>

      <div className="icons w-1/3 flex items-center justify-end gap-2 ">
        {Icons.map((Icon, index) => (
          <button key={index} className="bg-white w-5 md:w-8 aspect-square rounded flex items-center justify-center md:hover:shadow-xl">
            <Icon className="icon scale-75 md:scale-100" fontSize='small' />
          </button>
        ))}
      </div>

    </header>
  )
}

export default Header
