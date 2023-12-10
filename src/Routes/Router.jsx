import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import SignUp from "../SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Secret from "../Pages/Shared/Secret/Secret";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./adminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement:
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory></PaymentHistory>
        },
        // Admin Routes
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params})=> fetch(`https://bistro-boss-server-two-iota.vercel.app/menu/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

  export default router;