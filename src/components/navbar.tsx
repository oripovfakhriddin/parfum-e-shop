"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ParfumIcon from "../../public/images/parfum-log.png"
import ThemeToggle from './theme-toggle'
import NavLink from './nav-link'
import HomeIcon from '../../public/icons/home'
import ProductIcon from '../../public/icons/product'
import FavouriteIcon from '../../public/icons/favourite'
import CategoryIcon from '../../public/icons/category'
import CartIcon from '../../public/icons/cart'
import AccountIcon from '../../public/icons/account'
import OrderIcon from '../../public/icons/order'
import HamburgerIcon from '../../public/icons/hamburger'
import CloseIcon from '../../public/icons/close'
import LoginIcon from '../../public/icons/login'

const menuItems = [
  {
    label: "Bosh sahifa",
    icon: <HomeIcon />,
    href: "/"
  },
  {
    label: "Mahsulot",
    icon: <ProductIcon />,
    href: "/products"
  },
  {
    label: "Saralangan",
    icon: <FavouriteIcon />,
    href: "/favourite"
  },
  {
    label: "Kategoriya",
    icon: <CategoryIcon />,
    href: "/category"
  },
  {
    label: "Savat",
    icon: <CartIcon />,
    href: "/cart"
  },
  {
    label: "Buyurtma",
    icon: <OrderIcon />,
    href: "/orders"
  }
  
]

const Navbar = () => {

  const [isNavbar, setIsNavbar] = useState(false)

  return (
    <header className="flex items-center px-4 py-2 md:px-8 justify-between fixed top-0 w-full z-50 shadow bg-white dark:bg-boxdark-1">
      <Link href={"/"} className='flex items-center gap-1' >
        <Image priority src={ParfumIcon} alt={"Logotip"}  className='w-10 h-10' /> 
        <p className='text-primary text-xl'>PARFUM</p>
      </Link>
      <div className='flex gap-1 md:gap-4 items-center'>
      <nav >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <button onClick={()=>{setIsNavbar(!isNavbar)}} type="button" className="inline-flex items-center p-1 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 border-gray-200  outline-none ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
              { !isNavbar ? <HamburgerIcon /> : <CloseIcon />}
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-medium md:space-x-2 lg:space-x-4  md:flex-row">
              {menuItems.map((item, index)=> {return <li key={index}><NavLink  item={item} /></li>})}
              <li>
                <Link href={"/auth/login"} className={`flex items-center flex-col text-primary`}>
                  <div><LoginIcon /></div>
                  <p>Kirish</p>
                </Link>
              </li>
              <li>
                <Link href={"/account"} className={`flex items-center flex-col`}>
                  <div><AccountIcon /></div>
                  <p>Profil</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ThemeToggle />
      </div>
      
      
    </header>
  )
}

export default Navbar
