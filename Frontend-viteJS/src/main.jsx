import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import AdminRoutes from "./pages/AdminRoutes.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/adminDashboard/*" element={<AdminRoutes />} />

        <Route path="/register" element={<Register />} />
      </Routes>
      <App />
    </BrowserRouter>
  </Provider>
);
