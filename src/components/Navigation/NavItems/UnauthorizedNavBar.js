import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  CssBaseline,
  Slide,
  InputBase,
  Badge,
  useScrollTrigger,
  AppBar,
  Button,
  Toolbar,
  IconButton
} from "@material-ui/core/";
import { fade } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { IoIosLogIn, IoIosLogOut, IoIosPerson } from "react-icons/io";
import {
  FaMicrophone,
  FaSearch,
  FaCloudUploadAlt,
  FaShoppingCart,
  FaBell
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UnauthorizedNavbar = props => {
  const { cartItems, classes } = props;
  return (
    <div>
      <Link to="/register" className={classes.anchor}>
        <Button
          color="primary"
          className="font"
          // onClick={() => (window.location.href = "/register")}
        >
          Register
        </Button>
      </Link>
      <Link to="/login" className={classes.anchor}>
        <IconButton
          color="primary"
          // onClick={() => (window.location.href = "/login")}
        >
          <IoIosLogIn />
        </IconButton>
      </Link>
      <Link to="/cart" className={classes.anchor}>
        <IconButton
          color="primary"
          // onClick={() => (window.location.href = "/cart")}
        >
          <Badge badgeContent={cartItems.length} color="secondary">
            <FaShoppingCart />
          </Badge>
        </IconButton>
      </Link>
    </div>
  );
};

export default UnauthorizedNavbar;
