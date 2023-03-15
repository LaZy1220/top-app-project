import { HtagProps } from "./Htag.props";
import styes from "./Htag.module.css";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  return (
    <>
      {tag === "h1" && <h1 className={styes.h1}>{children}</h1>}
      {tag === "h2" && <h2 className={styes.h2}>{children}</h2>}
      {tag === "h3" && <h3 className={styes.h3}> {children}</h3>}
    </>
  );
};
