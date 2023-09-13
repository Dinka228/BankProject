import {
    CARDS_ROUTE,
    LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE
} from "./utils/consts";
import Main from "./page/Main";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import Card from "./page/Cards";


export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: SignIn
    },
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },
    {
        path: CARDS_ROUTE,
        Component: Card
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]
export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: SignIn
    },
    {
        path: REGISTRATION_ROUTE,
        Component: SignUp
    },
    {
        path: CARDS_ROUTE,
        Component: Card
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    }
]