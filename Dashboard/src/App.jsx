import React from 'react'

import Registration from '../Layouts/Registration'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Otp from '../Layouts/Otp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Registration/>}></Route>
     <Route path="/otp/:email/:otpcode" element={<Otp/>}></Route>
    </>
  )
);





function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App