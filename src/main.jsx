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
import SignUp from './Components/SignUp.jsx'
import Signin from './Components/Signin.jsx'
import AuthProvider from './Auth/AuthProvider.jsx'
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
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'signin',
        element:<Signin></Signin>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
