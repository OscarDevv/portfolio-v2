import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <aside></aside>
      <main>
        <Outlet />
      </main>
    </>
  );
};
