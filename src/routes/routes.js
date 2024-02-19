import config from "../config";
import DefaultLayout from "../layout/DefaultLayout";
import HeadlessLayout from "../layout/HeadlessLayout";
import AdminLayout from "../layout/AdminLayout";
// import HomeLayout from "../layout/HomeLayout";

// Page
import Home from "../Pages/Home";
import HomeDetail from "../Pages/HomeDetail";
import DichVu from "../Pages/DichVu";
import DuAn from "../Pages/DuAn";
import BaoGia from "../Pages/BaoGia";
import PhanHoi from "../Pages/PhanHoi";
import TuyenDung from "../Pages/TuyenDung";
import Cart from "../Pages/Cart";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

// Sub page
import NhaCap4 from "../Pages/NhaCap4";
import NhaPho from "../Pages/NhaPho";
import MauBietThu from "../Pages/MauBietThu";
import MauKhachSan from "../Pages/MauKhachSan";

// Admin Page
import HomeAdmin from "../PageAdmin/Home";
import OrderAdmin from "../PageAdmin/Order";
import ProductAdmin from "../PageAdmin/Products";
import SettingAdmin from "../PageAdmin/Settings";
import SignOutAdmin from "../PageAdmin/SignOut";

// Public routes
const publicRoutes = [
  // Page
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: config.routes.homeDetail,
    component: HomeDetail,
    layout: HeadlessLayout,
    // layout: DefaultLayout,
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
    layout: HeadlessLayout,
  },
  {
    path: config.routes.register,
    component: Register,
    layout: HeadlessLayout,
  },
  // Sub page
  {
    path: config.routes.nhaCap4Dep,
    component: NhaCap4,
    layout: DefaultLayout,
  },
  {
    path: config.routes.nhaPhoDep,
    component: NhaPho,
    layout: DefaultLayout,
  },
  {
    path: config.routes.mauBietThuDep,
    component: MauBietThu,
    layout: DefaultLayout,
  },
  {
    path: config.routes.mauKhachSanDep,
    component: MauKhachSan,
    layout: DefaultLayout,
  },
  // Admin
  {
    path: config.routes.homeAdmin,
    component: HomeAdmin,
    layout: AdminLayout,
  },
  {
    path: config.routes.orderAdmin,
    component: OrderAdmin,
    layout: AdminLayout,
  },
  {
    path: config.routes.productAdmin,
    component: ProductAdmin,
    layout: AdminLayout,
  },
  {
    path: config.routes.settingAdmin,
    component: SettingAdmin,
    layout: AdminLayout,
  },
  {
    path: config.routes.signOutAdmin,
    component: SignOutAdmin,
    layout: AdminLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
