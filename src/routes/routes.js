import config from "../config";
import DefaultLayout from "../layout/DefaultLayout";
// import HomeLayout from "../layout/HomeLayout";

// Page
import Home from "../Pages/Home";
import DichVu from "../Pages/DichVu";
import DuAn from "../Pages/DuAn";
import BaoGia from "../Pages/BaoGia";
import PhanHoi from "../Pages/PhanHoi";
import TuyenDung from "../Pages/TuyenDung";
import Cart from "../Pages/Cart";
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
    path: config.routes.dichVu,
    component: DichVu,
    layout: DefaultLayout,
  },
  {
    path: config.routes.duAn,
    component: DuAn,
    layout: DefaultLayout,
  },
  {
    path: config.routes.baoGia,
    component: BaoGia,
    layout: DefaultLayout,
  },
  {
    path: config.routes.phanHoi,
    component: PhanHoi,
    layout: DefaultLayout,
  },
  {
    path: config.routes.tuyenDung,
    component: TuyenDung,
    layout: DefaultLayout,
  },
  {
    path: config.routes.cart,
    component: Cart,
    layout: DefaultLayout,
  },
  {
    path: config.routes.login,
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: config.routes.register,
    component: Register,
    layout: DefaultLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
