import React from 'react'
import './DropDown.css'
import { OpenInBrowserOutlined } from '@mui/icons-material'

export const DropdownRow = ({ idx, text}) => {
    const icons = [<OpenInBrowserOutlined />,null, null, null]
  return (
      <div style={{display: 'flex', margin: 10, justifyContent: 'space-between', fontWeight: '20', fontSize: 14}}>
        {text} {<OpenInBrowserOutlined />} 
      </div>
    
  )
}


export const DropdownItem = () => {
    const items = ['Account', 'Profile', 'Upgrade to premium', 'Log out']
    
  return (
    <div>
        {items.map((text, idx) => (
             <DropdownRow icon={idx} text={text}/>
        ))}
       
    </div>
  )
}

const Dropdown = () => {
  return (
    <div className='dropdown'>
        <DropdownItem />
    </div>
  )
}

export default Dropdown