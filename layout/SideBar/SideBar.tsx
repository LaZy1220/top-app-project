import { SideBarProps } from "./SideBar.props";
import styles from "./SideBar.module.scss";
import cn from "classnames";
import { Menu } from "../Menu/Menu";
import Logo from "./../logo.svg";

export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
