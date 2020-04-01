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

const UserNavbar = (props, classes) => {
  return (
    <div>
      <Link to="/notification" className={classes.anchor}>
        <IconButton
          color="primary"
          // onClick={() => (window.location.href = "/notification")}
        >
          <FaBell />
        </IconButton>
      </Link>
      <Link to="/user-profile" className={classes.anchor}>
        <IconButton
          color="primary"
          // onClick={() => (window.location.href = "/user-profile")}
        >
          <IoIosPerson />
        </IconButton>
      </Link>
      <Link to="/myorder" className={classes.anchor}>
        <Button color="primary" className="font">
          Orders
        </Button>
      </Link>
      <Link
        to="/cart"
        className={classes.anchor}
        // onClick={() => props.history.push("/cart")}
      >
        <IconButton
          color="primary"
          // onClick={() => (window.location.href = "/cart")}
        >
          <Badge badgeContent={props.cartItems.length} color="secondary">
            <FaShoppingCart />
          </Badge>
        </IconButton>
      </Link>
      <Link className={classes.anchor} onClick={props.handleLogout}>
        <IconButton color="primary">
          <IoIosLogOut />
        </IconButton>
      </Link>
    </div>
  );
};

export default UserNavbar;
