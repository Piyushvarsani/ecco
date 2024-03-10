import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavLinkSingle({ to, children }) {
  const navigation = useNavigate();
  useEffect(() => {}, []);
  return (
    <NavLink
      onClick={() => navigation(to)}
      className="w-max p-3 hover:bg-slate-200 transition-all rounded-md mx-2"
    >
      {children}
    </NavLink>
  );
}

export default NavLinkSingle;
