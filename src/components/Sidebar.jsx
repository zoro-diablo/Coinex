import './sidebar.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { MdOutlineCircle } from 'react-icons/md'
import { GoHome } from 'react-icons/go'
import { MdFolderSpecial } from 'react-icons/md'
import { MdOutlineSecurity } from 'react-icons/md'
import { LuUsers } from 'react-icons/lu'
import { FaTags } from 'react-icons/fa'
import { PiShoppingBagOpenFill } from 'react-icons/pi'
import { MdWidgets } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { SiGoogleforms } from 'react-icons/si'
import { MdTableChart } from 'react-icons/md'
import { FaInfo } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'

const navVarients = {
  whileHover: {
    color: ['#bfbfbf', '#d3d1d1', '#fff'],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState([])
  const [isActive, setIsActive] = useState(false)

  const handleClick = (index) => {
    setIsOpen((prev) => {
      const copy = [...prev]
      copy[index] = copy[index] !== undefined ? !copy[index] : true
      return copy
    })
  }
  return (
    <div className='container'>
      <div className={`sidebar relative ${isActive ? 'active' : ''}`}>
        <div
          className=' absolute right-[-10px] top-[4%] z-10'
          onClick={() => setIsActive(!isActive)}
        >
          <div className='bg-[#ff971d] p-1 rounded-sm cursor-pointer'>
            <FaArrowLeft className='text-white cursor-pointer menu-btn' />
          </div>
        </div>
        <div className='head '>
          <div className='flex'>
            <img
              src='/coinex_logo.svg'
              alt='logo_coinex'
              className='cursor-pointer'
            />
          </div>
          <div className='user-details flex items-center'>
            <p className='title logo-title cursor-pointer'>OINEX</p>
          </div>
        </div>
        <div className='nav'>
          <div className='menu flex flex-col gap-y-1 mt-5'>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(0)}
              >
                <motion.div className=' flex items-center'>
                  <GoHome size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Dashboard
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar hidden'>
                  {!isOpen[0] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(1)}
              >
                <motion.div className=' flex items-center'>
                  <MdFolderSpecial size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Special Pages
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[1] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[1] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Portfolio</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Academy</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Trading</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Watchlist</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>List</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(2)}
              >
                <motion.div className=' flex items-center'>
                  <MdOutlineSecurity size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Authentication
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[2] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[2] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Login</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Register</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Confirm Mail</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Lock Screen</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Recover Password</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(3)}
              >
                <motion.div className=' flex items-center'>
                  <LuUsers size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Users
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[3] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[3] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>User Profile</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>User Edit</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>User List</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(4)}
              >
                <motion.div className=' flex items-center'>
                  <FaTags size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Utilities
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[4] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[4] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Error 404</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Error 500</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Maintence</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <div className=' mt-2 line-bar inset-x-0 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-75'></div>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(5)}
              >
                <motion.div className=' flex items-center'>
                  <PiShoppingBagOpenFill size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    UI Elements
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[5] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[5] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Avatars</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Alerts</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Badge</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Breadcrumb</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Buttons</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Buttons Group</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Box Shadow</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Colors</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Cards</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Carousel</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Grid</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Helper Classes</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Images</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>List Group</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Modal</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Notifications</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Pagination</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Popovers</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Typography</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Tabs</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Tooltips</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Video</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(6)}
              >
                <motion.div className=' flex items-center'>
                  <MdWidgets size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Widgets
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[6] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[6] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Widget Basic</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Widget Chart</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Widget Card</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(7)}
              >
                <motion.div className=' flex items-center'>
                  <FaLocationDot size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Maps
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[7] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[7] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Google</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Vector</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(8)}
              >
                <motion.div className=' flex items-center'>
                  <SiGoogleforms size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Form
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[8] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[8] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Elements</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Wizard</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Validation</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(9)}
              >
                <motion.div className=' flex items-center'>
                  <MdTableChart size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Table
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[9] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[9] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Bootstrap Table</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Datatable</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Maintence</span>
                  </motion.li>
                </ul>
              )}
            </Link>
            <Link to='/'>
              <motion.div
                whileHover='whileHover'
                variants={navVarients}
                className='flex justify-between items-center ml-[20px] mt-[14px] mb-[13px]'
                onClick={() => handleClick(10)}
              >
                <motion.div className=' flex items-center'>
                  <FaInfo size={20} />
                  <span className='ml-[16px] text-[14px] content-heading'>
                    Icons
                  </span>
                </motion.div>
                <motion.div className='mr-[20px] arrow-bar'>
                  {!isOpen[10] ? <IoIosArrowForward /> : <IoIosArrowDown />}
                </motion.div>
              </motion.div>
              {isOpen[10] && (
                <ul className='flex flex-col mx-auto sub-menus'>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Solid</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Outlined</span>
                  </motion.li>
                  <motion.li
                    whileHover='whileHover'
                    variants={navVarients}
                    className='flex items-center gap-[13px] py-[13px] ml-12'
                  >
                    <MdOutlineCircle />
                    <span className='text-[14px]'>Dual Tone</span>
                  </motion.li>
                </ul>
              )}
            </Link>
          </div>
          <div className='mt-[100px] mx-5 mb-[30px] news'>
            <div className='bg-[#202022] rounded-sm flex flex-col justify-center'>
              <div className='flex justify-center'>
                <img src='/safe.png' alt='safe' width={180} />
              </div>
              <p className='text-[16px] mx-5'>
                Be more secure with Pro Feature
              </p>
              <button className='bg-[#dd8219] w-[180px] mx-auto rounded-[5px] py-2 mt-5 mb-5'>
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
