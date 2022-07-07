import {
  StyledNavbar,
  StyledNavList,
  StyledNavItem,
  StyledNavHeading,
  StyledLink,
  StyledNavMenu,
} from "../../styles/styled_components";
import { routeList } from "../../Services/RouteList";
// import { useSelector,useDispatch } from "react-redux/es/exports";
// import {UserStatusActions} from "../../Redux/UserStatus";

export default function Navbar({ toggleOpen }) {
  // const userStatus = useSelector((state) => state);
  // const dispatch = useDispatch();
  // const login  = () =>{
  

  //   dispatch(UserStatusActions.toggleStatus())
  //   console.log(userStatus)
  // }
  const itemAnimation = {
    scaleX: 1.1,
    color: "#4daea3",
  };

  return (
    <StyledNavbar
      initial={{ y: -70, transition: { duration: 0 } }}
      animate={{
        y: 0,
        transition: {
          duration: 0.6,
        },
      }}
    >
      <StyledNavHeading>RSBlogs</StyledNavHeading>
      <StyledNavMenu onClick={() => toggleOpen((prev) => !prev)}>
        <i className="fa-solid fa-bars"></i>
      </StyledNavMenu>
      <StyledNavList>
        {routeList().map((value) => (
          <StyledLink key={value.path} href={value.path}>
            <StyledNavItem whileHover={itemAnimation}>
              <i className={value.icon} style={{marginRight:"0.3em"}}> </i>
              {value.name}
            </StyledNavItem>
          </StyledLink>
        ))}

        {/* <StyledNavItem whileHover={itemAnimation} onClick ={login}>{userStatus?<><i className="fa-solid fa-arrow-right-from-bracket"></i> Loggout </>:<><i className="fa-solid fa-arrow-right-to-bracket"> </i> Login</>}</StyledNavItem> */}
      </StyledNavList>
    </StyledNavbar>
  );
}
