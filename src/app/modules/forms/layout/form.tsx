import ChildrenNavigation from "@components/childrenNav"
import { Routes } from '@modules/forms/router'
import { Outlet } from 'react-router-dom'

const Forms = () => {
    return <div className="children-layout">
        <ChildrenNavigation Routes={ Routes }/>
        <Outlet/>
    </div>
}


export default Forms