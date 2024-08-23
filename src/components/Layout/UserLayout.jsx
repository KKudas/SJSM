import { Outlet } from "react-router-dom";
import HeaderBar from "../HeaderBar/HeaderBar";
import Footer from "../Footer/Footer";

export default function UserLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <HeaderBar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
