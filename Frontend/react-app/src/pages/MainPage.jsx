import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../components/Header'

function MainPage() {
    return (
        <div>
            <Header />


            <Outlet />
        </div>
    )
}

export default MainPage
