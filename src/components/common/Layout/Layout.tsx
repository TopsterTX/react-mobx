import { FC, ReactElement } from "react";

type Props = { children?: ReactElement };

export const Layout: FC<Props> = ({ children }) => (
  <div>
    <header></header>
    <main>{children}</main>
  </div>
);
