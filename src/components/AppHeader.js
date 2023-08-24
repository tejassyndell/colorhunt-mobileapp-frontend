/* eslint-disable */
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle,
} from "@coreui/react";
import cilMenu from "src/assets/Colorhuntimg/Sidebaricon/menu.svg";
import noImages from "src/assets/Colorhuntimg/navbaricon/Group 8919.png";
import { useState } from "react";
import "../css/ipad.css";
// // import ProfileIcon from 'src/assets/images/cart.png'
// import CartIcon from 'src/assets/images/higrow/notification (1) 1.svg'
// import MobileLogo from 'src/assets/images/LogoImg.png'

const AppHeader = (props) => {
  const { UserData } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const [click1, setClick1] = useState(true);

  const routerChangeProfile = () => {
    if (click1 === true) {
      setClick1(false);
      navigate("/profile");
    }
  };

  return (
    <CHeader position="sticky" className="mb-4 header_padding">
      <CContainer fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: "set", sidebarShow: !sidebarShow })}
        >
          <img src={cilMenu} width={30} alt="Logo" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/"></CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink></CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="me-2">
          <CDropdown variant="nav-item">
            <CDropdownToggle
              placement="bottom-end"
              className="py-0"
              caret={false}
            >
              <img
                src={noImages}
                onError={(e) => {
                  e.target.src = noImages;
                }}
                style={{ position: "relative", left: "14px" }}
                width={35}
                onClick={() => {
                  routerChangeProfile();
                }}
                alt="Profile Avatar"
              />
            </CDropdownToggle>
          </CDropdown>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
