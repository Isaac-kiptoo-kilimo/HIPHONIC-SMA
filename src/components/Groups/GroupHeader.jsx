import React from 'react'
import { IoSearch } from "react-icons/io5";
import Button from '../shared/Button'
import { FaPlusSquare } from "react-icons/fa";
import SearchForm from '../shared/SearchForm'
import './GroupHeader.scss'




const GroupHeader = () => {
  return (
 
      <div className='group-page-header'>
      <div className="group-page-title">
        <h2>Groups</h2>
      </div>
      <div className="group-page-icon">
        <div className="circled-search-icon">
        <IoSearch />
          </div>
          <div className="create-group-btn">
        <Button  btnicon={FaPlusSquare} msg="Create New Group" />
        </div>
        <div className="larger-search-bar">
        <SearchForm className="search-form" />
        </div>
        
      </div>
    </div>

  )
}

export default GroupHeader;
