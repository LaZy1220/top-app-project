import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";
import cn from "classnames";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { SideBar } from "./SideBar/SideBar";
import { FunctionComponent } from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
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
export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
