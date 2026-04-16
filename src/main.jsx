import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Homepage from './pages/homepage/Homepage'
import Timeline from './pages/Timeline/Timeline'
import Stats from './pages/stats/Stats'
import Friend from './pages/friend/Friend'
import FriendDetails from './pages/friend/FriendDetails'

const router=createBrowserRouter(
  [
    {
      path:"/",
      Component: RootLayout,
      children:[
        {
          path:"/",
          Component: Homepage,
        },
        {
          path:"/friend",
          Component: Friend,
          
        },
        {
          path:"/timeline",
          Component:Timeline

        },
        {
          path:"/stats",
          Component: Stats
        },
        {
          path:"/friendDetails/:id",
          Component: FriendDetails,
          loader:async ({ params }) => {
          const res = await fetch("/data.json");
        const data = await res.json();
        const friend = data.find(f => f.id === parseInt(params.id));
        return friend;
    }
        }

      ],
      errorElement: <h2>This page is not found</h2>
    }

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
