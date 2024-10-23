import { Outlet } from "react-router";
import Header from "../Header/Header";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";

function Layout({products, carts, setToken, role}) {
  return (
    <div>
      <Header />
      <Navber products={products} carts={carts} setToken={setToken} role={role} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
