import config from "../config";
import DefaultLayout from "../layout/DefaultLayout";
import HomeLayout from "../layout/HomeLayout";

// Page
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

// Sub Page

// Public routes
const publicRoutes = [
  // Page
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: HomeLayout,
  },
  {
    path: config.routes.register,
    component: Register,
    layout: HomeLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
