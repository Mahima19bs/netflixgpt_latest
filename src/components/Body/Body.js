import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from '../Login/Login.js'
import Browse from '../Browse/Browse.js';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;