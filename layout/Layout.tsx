import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import cn from "classnames";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { SideBar } from "./SideBar/SideBar";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <SideBar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};
