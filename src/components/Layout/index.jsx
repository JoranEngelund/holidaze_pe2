import { Outlet } from "react-router-dom";
import Header from "../Header";
import * as s from "./styled";
import Footer from "../Footer";

/**
 * A layout component that defines the structure of the application.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Layout component.
 */
const Layout = () => {
  return (
    <>
      <Header />
      <s.Main>
        <Outlet />
      </s.Main>
      <Footer />
    </>
  );
};

export default Layout;
