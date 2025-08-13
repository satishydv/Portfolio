import React from 'react'

const TabButton = ({active,selectTab,children}) => {
    const buttonClass = active ? 'text-white' : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClass} transition-all duration-300`}
        >{children}</p>
        <div className='h-1 bg-purple-400 mt-2 mr-3'>
            
        </div>
    </button>
  )
}

export default TabButton