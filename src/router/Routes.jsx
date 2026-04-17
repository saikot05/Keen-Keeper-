import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Friend from "../pages/friend/Friend";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../pages/friend/FriendDetails";
import ErrorPage from "../pages/errorpage/ErrorPage";


export const router=createBrowserRouter(
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
      errorElement: <ErrorPage></ErrorPage>
    }

  ]
)