import React from 'react'
import { Outlet } from "react-router-dom";


import HeaderComponent from '../../components/HeaderComponent';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function Campaigns() {

    return (
        <>
            <HeaderComponent title="Campaigns">
                Children
            </HeaderComponent>


            <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8"><Outlet /></div>
            </main>
        </>
    )
}
