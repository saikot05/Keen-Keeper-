import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import FriendDetails from './pages/friend/FriendDetails'
import Homepage from './pages/homepage/Homepage'
import Timeline from './pages/Timeline/Timeline'
import Stats from './pages/stats/Stats'

const router=createBrowserRouter(
  [
    {
      path:"/",
      Component: RootLayout,
      children:[
        {
          path:"/",
          Component: Homepage
        },
        {
          path:"/friend",
          Component: FriendDetails
        },
        {
          path:"/timeline",
          Component:Timeline

        },
        {
          path:"/stats",
          Component: Stats
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
