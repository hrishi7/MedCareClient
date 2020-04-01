import React from 'react'
import PropTypes from "prop-types";
import { makeStyles, CssBaseline, Slide, InputBase, Badge, useScrollTrigger, AppBar, Button, Toolbar, IconButton } from "@material-ui/core/";
import { fade } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { IoIosLogIn,IoIosLogOut,IoIosPerson } from "react-icons/io";
import { FaMicrophone, FaSearch, FaCloudUploadAlt, FaShoppingCart, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNavbar = (props,classes) => {
  return (
    <div>
              <Link to="/notification" className={classes.anchor}>
              <IconButton color="primary">
              <FaBell />
              </IconButton>
              </Link>
              <Link to="/admin-dashboard" className={classes.anchor}>
              <IconButton color="primary">
              Dashboard
              </IconButton>
              </Link>
              <Link className={classes.anchor} onClick={props.handleLogout}>
              <IconButton color="primary">
              <IoIosLogOut />
              </IconButton>
              </Link>
    </div>
  )
}

export default AdminNavbar
