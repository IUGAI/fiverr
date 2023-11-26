import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Add from './pages/add/Add'
import Login from './pages/login/Login'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from './pages/orders/Orders'
import Registers from './pages/registers/Registers'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import './app.scss'


const queryClient = new QueryClient()

export default function App() {

  const Layout = () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        }
        ,
        {
          path: "/gigs",
          element: <Gigs />
        }
        ,
        {
          path: "/add",
          element: <Add />
        }
        ,
        {
          path: "/login",
          element: <Login />
        }
        ,
        {
          path: "/message",
          element: <Message />
        }
        ,
        {
          path: "/messages",
          element: <Messages />
        }
        ,
        {
          path: "/myGigs",
          element: <MyGigs />
        }
        ,
        {
          path: "/orders",
          element: <Orders />
        }
        ,
        {
          path: "/register",
          element: <Registers />
        }


      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
