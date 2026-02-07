import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { dummyUserData } from "../assets/assets";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";

function Layout() {
  const user = dummyUserData;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return user ? (
    <div className="w-full flex   sticky top-0">
      <SideBar sideBarOpen={sidebarOpen} setSideBarOpen={setSidebarOpen} />
      <div className="flex-1 bg-slate-50 h-screen  overflow-y-auto">
        <Outlet />
      </div>
      <div className="md:hidden">
        {sidebarOpen ? (
          <X
            className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 text-grey-600 h-10 sm:backface-hidden"
            onClick={() => setSidebarOpen(false)}
          />
        ) : (
          <Menu
            className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-grey-600 sm:backface-hidden"
            onClick={() => setSidebarOpen(true)}
          />
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Layout;
