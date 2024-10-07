"use client";

import { Theme } from '@/constants';
import React, { Fragment, useEffect, useState } from 'react'
import LightIcon from '../../public/icons/light-icon';
import DarkIcon from '../../public/icons/dark-icon';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)
useEffect(()=>{
  const theme = localStorage.getItem(Theme)
  if (theme === "dark") {
    setDarkMode(true)
  }
}, [])

useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add("dark")
    localStorage.setItem(Theme, "dark")
  } else {
    document.documentElement.classList.remove("dark")
    localStorage.setItem(Theme, "light")
  }
}, [darkMode])

  return (
    <Fragment>
      <div>
        <button className='p-1 text-gray-500 rounded-lg md:hidden hover:bg-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none' onClick={()=>{setDarkMode(!darkMode)}}>
          {darkMode ? <LightIcon /> : <DarkIcon />}
        </button>
      </div>
    </Fragment>
  )
}

export default ThemeToggle
