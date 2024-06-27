import { useState } from "react";
import Link from "../Link/Link";
import { CiMenuFries } from "react-icons/ci";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/dashboard', name: 'Dashboard', id: 5 }
    ];



    return (
        <nav className="text-black p-5 bg-yellow-200">
            <div className="md:hidden" onClick={()=>setOpen(!open)}>
                {
                  open === true ? 'open' : 'close'   
                }

                <CiMenuFries className="text-2xl"></CiMenuFries>
            
            
            </div>
            
            <ul className={`md:flex absolute duration-1000 
                ${open ? 'top-16' : '-top-60'}  bg-yellow-200 px-6 shadow-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;