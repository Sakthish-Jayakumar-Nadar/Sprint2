import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Home.jsx'
import UserForm from './Form.jsx'
import Table from './Table.jsx'
import NetPlanTable from './NetPlanTable.jsx'
import NetPlanForm from './NetPlanForm.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='Network/:network' element={<Table />}/>
      <Route path='Network/:network/AddNewUser' element={<UserForm />}/>
      <Route path='Network/:network/NetPlan/:userid' element={<NetPlanTable />}/>
      <Route path='Network/:network/UpdateUser/:userid' element={<UserForm />}/>
      <Route path='Network/:network/NetPlan/:userid/AddNetPlan' element={<NetPlanForm />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
