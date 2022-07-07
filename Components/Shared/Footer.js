import React from "react";
import { StyledFooter } from "../../styles/styled_components";
export default function Footer() {
  return (
    <StyledFooter>
      <div>
        <div>
          <i aria-hidden className="fa-brands fa-instagram"></i>
          <i aria-hidden className="fa fa-twitter"></i>
          <i aria-hidden className="fa-brands fa-linkedin"></i>
        </div>
      </div>
        <div>Copyright GSG009@2022</div>
    </StyledFooter>
  );
}
