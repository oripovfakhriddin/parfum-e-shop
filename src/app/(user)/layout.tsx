import React from 'react'
import ChildrenType from '../../types/children';
import Navbar from '@/components/navbar';

const UserLayout = ({children}:ChildrenType) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default UserLayout
