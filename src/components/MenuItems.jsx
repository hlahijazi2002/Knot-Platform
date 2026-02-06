import { NavLink } from "react-router-dom";
import { menuItemsData, dummyUserData } from "../assets/assets";

const MenuItems = ({ setSideBarOpen }) => {
  return (
    <div className="px-6 text-grey-600 space-y-1 font-medium  ">
      {menuItemsData.map(({ to, label, Icon }) => {
        const targetPath =
          to === "/profile" ? `/profile/${dummyUserData._id}` : to;
        return (
          <NavLink
            key={to}
            to={targetPath}
            end={to === "/"}
            onClick={() => {
              setSideBarOpen(false);
            }}
            className={({ isActive }) =>
              `px-3.5 py-2 flex items-center gap-3 rounded-xl ${isActive ? "bg-indigo-50 text-indigo-700 " : "hover:bg-gray-50"}`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default MenuItems;
