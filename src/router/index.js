import Login from "../pages/Login/";
import Home from "../pages/Home/";

const routes = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/Login',
        element: <Login />
    },
    {
        path: '/Home',
        element: <Home />
    }
]

export { routes }