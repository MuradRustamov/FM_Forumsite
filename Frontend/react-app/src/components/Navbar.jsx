import React from 'react'
import { Link } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { BiSolidCategory } from "react-icons/bi";
import { BsFillBoxFill } from "react-icons/bs";
import { IoStorefront, IoNotifications } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
function Navbar() {
    const items = [
        {
            id: 1,
            to: "",
            icon: <TiHome />
        },
        {
            id: 2,
            to: "topics",
            icon: <BiSolidCategory />
        },
        {
            id: 3,
            to: "products",
            icon: <BsFillBoxFill />
        },
        {
            id: 4,
            to: "businesses",
            icon: <IoStorefront />
        },
        {
            id: 5,
            to: "workers",
            icon: <GrUserWorker />
        },
        {
            id: 6,
            to: "notifications",
            icon: <IoNotifications />
        },
        {
            id: 7,
            to: "profile",
            icon: <FaUserCircle />
        },
    ]
    return (
        <nav>
            <ul>
                {items && items.map((item) => (
                    <Link to={item.to} key={item.id} >
                        {item.icon}
                    </Link>


                ))}
            </ul>

        </nav>
    )
}

export default Navbar
