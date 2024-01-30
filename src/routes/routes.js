import config from "../config";
import DefaultLayout from "../layout/DefaultLayout";
import HomeLayout from "../layout/HomeLayout";

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
    layout: HomeLayout,
  },
  {
    path: config.routes.phanHoi,
    component: PhanHoi,
    layout: HomeLayout,
  },
  {
    path: config.routes.tuyenDung,
    component: TuyenDung,
    layout: HomeLayout,
  },
  {
    path: config.routes.cart,
    component: Cart,
    layout: HomeLayout,
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
