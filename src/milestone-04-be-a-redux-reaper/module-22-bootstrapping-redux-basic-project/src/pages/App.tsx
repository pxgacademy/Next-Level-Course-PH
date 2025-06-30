import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
