import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <div className="container w-full mx-auto">
            <Navbar
            fluid={false}
            rounded={true}
            >
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                Flowbite
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <li>
                <Link to="/"href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                </li>
                <li>
                <Link to="/"href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Resep Dokter</Link>
                </li>
                <li>
                <Link to="/"href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
                </li>
                <li>
                <Link to="/"href="#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</Link>
                </li>
            </Navbar.Collapse>
            </Navbar>
            </div>
        </>
    )
}

export default Navbar