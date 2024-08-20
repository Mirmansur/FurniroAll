import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import logo from "../assets/imegs/logo.svg";
import "./List.css";
export const mainListItems = (
  <React.Fragment>
    <Link to="/dashbord" className="teacher">
      <ListItemButton className="Furniro">
        <ListItemIcon>
          <img src={logo} alt="" />
        </ListItemIcon>
        <ListItemText primary="Furniro" className="furnoro_text" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
