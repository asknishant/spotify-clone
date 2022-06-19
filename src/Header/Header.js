import React, { useState } from 'react'
import './Header.css'
import { ArrowDropDown, Search } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../DataLayer'
import Dropdown from './DropDown'

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="header__left">
        <Search/>
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right" onClick={() => setOpen(!open)}>
        <Avatar style={{width: 30, height: 30}} alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
        <ArrowDropDown />
      </div>
      {open ? <Dropdown /> : null}
    </div>
  );
};

export default Header;