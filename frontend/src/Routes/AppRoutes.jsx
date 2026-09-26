import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { Facilities } from '../Pages/Facilities/Facilities'
import { Works } from '../Pages/Works/Works'
import { Contact } from '../Pages/Contact/Contact'

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/facilities' element={<Facilities />} />
                <Route path='/works' element={<Works />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export { AppRoutes }