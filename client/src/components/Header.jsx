import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
            <Link to='/'>
                <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
                    <span className="text-slate-500">Al-Noor</span>
                    <span className="text-slate-700">Estate</span>
                </h1>
            </Link>

            <form className="bg-slate-100 p-3 rounded-lg flex items-center">
                <input type="text" placeholder="Search..." className="bg-transparent focus:outline-none w-24 sm:w-64" />
                <FaSearch className='text-slate-600'/>
            </form>

            <ul className='flex gap-3'>
                <Link to='/'>
                    <li className='hidden sm:inline p-2 text-slate-700 hover:bg-slate-500 hover:text-slate-100 rounded-sm transition-all cursor-pointer'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline p-2 text-slate-700 hover:bg-slate-500 hover:text-slate-100 rounded-sm transition-all cursor-pointer'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='sm:inline p-2 text-slate-700 hover:bg-slate-500 hover:text-slate-100 rounded-sm transition-all cursor-pointer'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header
