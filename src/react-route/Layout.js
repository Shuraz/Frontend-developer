import React from "react";

import Footer from "./Footer";
import NavBar from "./NavBar";
function Layout({children}) {
  return (
    <div>
    <NavBar/>
    <div style={{ top:'300px',background:'lightgreen' }}>
      {children}
    </div>
      <Footer/>
    </div>
  );
}

export default Layout;
