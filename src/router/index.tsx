import { createBrowserRouter } from "react-router-dom";
import { Loader } from "../components";
import { MockPage, RegistrationPage } from "../pages";

const pageLoader = () => <Loader />;

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MockPage />,
      loader: pageLoader,
   },
   {
      path: "/registration",
      element: <RegistrationPage />,
      loader: pageLoader,
   },
]);
