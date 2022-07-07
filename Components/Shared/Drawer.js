import React from "react";
import { StyledDrawer, StyledDrawerItem} from "../../styles/styled_components";
import { routeList } from "../../Services/RouteList";
import { useRouter } from "next/router";

// import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Drawer({ isOpen,toggleOpen }) {
  // const userStatus = useSelector((state)=>state).userStatus
  // const userStatus = true;
  const router = useRouter();
  const drawerAnimationVariant = {
    hidden: {
      x: -300,
      transition: {
        duration: 0.8,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const listItemVariant = {
    onhover: {
      backgroundColor: "#c8c8c8",
    },
    active: {
      backgroundColor: "#e6e6e6",
    },
    inactive: {
      backgroundColor: "inherit",
    },
  };

  const handleClick = (path) =>{
      router.push(path);
      toggleOpen();
  }
  return (
    <StyledDrawer
      variants={drawerAnimationVariant}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
    >
      {routeList().map((value) => (
        
        <StyledDrawerItem key={value.path} variants={listItemVariant} whileHover="onhover" onClick= {()=>handleClick(value.path)}>
          <i className={value.icon}></i>{value.name}
        </StyledDrawerItem>

      ))}
    </StyledDrawer>
  );
}
