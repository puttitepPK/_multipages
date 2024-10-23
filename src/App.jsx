import { useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom"; /*พิมพ์ถูกจะแทรกให้ */

import Layout from "./Layouts/Layout/Layout"; /*เป็นตัวครอบทั้งหมด 3 ส่วน Head nav foot */

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
import Todo from "./pages/Todo/Todo";
import Animation from "./pages/Animation/Animation";
import Calculator from "./pages/Calculator/Calculator";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";

import { fetchProducts } from "./data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [role, setRole] = useState(""); //ไว้เก็บระดับการใช้งานว่า user นี้เปิดได้แค่หน้าไหนบาง

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  // เมื่อแอปพลิเคชันโหลดครั้งแรก เช็ค token จาก localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token"); // ดึง token จาก localStorage
    const savedRole = localStorage.getItem("role"); // ดึง role จาก localStorage
    if (savedToken) {
      setToken(savedToken); // ถ้า token มีค่าใน localStorage ให้ตั้งค่าใน state
      setRole(savedRole);     // ตั้งค่า role จาก localStorag
    }
  }, []);                   // [] ทำให้ useEffect นี้ทำงานแค่ครั้งเดียวตอนโหลดครั้งแรก

  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  // เมื่อมีการเปลี่ยนแปลงค่า token จะเก็บค่าใน localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token); // เก็บ token ใน localStorage
      localStorage.setItem("role", role);   // เก็บ role ใน localStorage
    } else {
      localStorage.removeItem("token");     // ลบ token เมื่อ logout
      localStorage.removeItem("role");      // ลบ role เมื่อ logout
    }
  }, [token, role]);

  //useEffect(() => setProducts(fetchProducts()), []);      ตามคลิป อ.สอน
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    //ถ้า token เป็นช่องว่าง จะโชว์หน้า login
    return <Login setToken={setToken} setRole={setRole} />;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route
              element={
                <Layout products={products} carts={carts} setToken={setToken} role={role} />
              }
            >
              {" "}
              {/* ถ้าไม่มี route ครอบ จะไม่เห็น Head nav foot*/}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/components" element={<Components />} />
              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/carts"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
