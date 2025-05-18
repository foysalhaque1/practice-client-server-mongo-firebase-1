import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from './Layouts/MainLayouts.jsx'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import ViewDetails from './Components/ViewDetails.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayouts></MainLayouts>,
    children:[
      {
        index:true,
        loader:()=> fetch('http://localhost:2000/coffees'),
        element:<Home></Home>
      },
      {
        path:'addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'updateCoffee/:id',
        loader:({params})=>fetch(`http://localhost:2000/coffees/${params.id}`),
        element:<UpdateCoffee></UpdateCoffee>
      },
      {
        path:'details/:id',
        loader:({params})=>fetch(`http://localhost:2000/coffees/${params.id}`),
        element:<ViewDetails></ViewDetails>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
