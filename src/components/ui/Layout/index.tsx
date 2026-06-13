import { Outlet } from "react-router-dom";
import { Aside } from "../Aside";

export const Layout = () => {
  return (
    <>
      <Aside></Aside>
      <main>
        <Outlet />
      </main>
    </>
  );
};
