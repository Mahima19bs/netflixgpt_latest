import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Login from "../Login/Login.js";
import Browse from "../Browse/Browse.js";
import { addUser, removeUser } from "../../utils/userSlice.js";

const appRouter = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/browse", element: <Browse /> },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (window.location.pathname !== "/browse") {
          window.location.replace("/browse");
        }
      } else {
        dispatch(removeUser());
        if (window.location.pathname !== "/") {
          window.location.replace("/");
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
