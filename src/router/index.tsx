import { createBrowserRouter } from "react-router-dom";
import { RegisterPage, MockPage } from "../pages";
import { Loader } from "../components";

const pageLoader = () => <Loader />;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MockPage />,
    loader: pageLoader,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    loader: pageLoader,
  },
]);
