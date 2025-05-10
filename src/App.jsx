import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  let routerConfig = createBrowserRouter([
    {
      path: "",
      element: <Layout></Layout>,
      children: [
        { index: true, element: <LoginPage /> }, 
        { path: "home", element: <HomePage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routerConfig}></RouterProvider>
    </>
  );
}

export default App;
