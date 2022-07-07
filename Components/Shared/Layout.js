import React from "react";
import Drawer from "./Drawer";
import Footer from "./Footer";
import Navbar from "./Navbar";
 function Layout(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Navbar toggleOpen={toggleOpen} />
      <Drawer isOpen={isOpen}  toggleOpen={toggleOpen} />
      {props.children}
      <Footer/>
    </>
  );
}


export default Layout;