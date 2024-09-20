import React from 'react'
import NorthEastIcon from '@mui/icons-material/NorthEast';

const BoxButton = ({text}) =>{
  return(
    <button className='flex items-center py-2 px-4 bg-primary gap-4'>
      <div className="w-8 h-8 rounded-full border border-background flex items-center justify-center">
        <NorthEastIcon className="text-background" fontSize='small' />
      </div>
      <p className='capitalize text-xs text-background'>{text}</p>
    </button>
  )
}

export default BoxButton;