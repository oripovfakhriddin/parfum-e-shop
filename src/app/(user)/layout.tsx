import React, { Fragment } from 'react'
import ChildrenType from '../../types/children';
import Navbar from '@/components/navbar';

const UserLayout = ({children}:ChildrenType) => {
  return (
    <Fragment>
      <Navbar/>
      {children}
    </Fragment>
  )
}

export default UserLayout
