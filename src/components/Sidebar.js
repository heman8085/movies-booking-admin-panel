import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CategoryIcon from "@mui/icons-material/Category";
import MovieIcon from "@mui/icons-material/Movie";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BookIcon from "@mui/icons-material/Book";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <List>
        <ListItem component={Link} to="/add-category">
          <ListItemIcon>
            <CategoryIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Add Category" />
        </ListItem>
        <ListItem component={Link} to="/add-movie" button>
          <ListItemIcon>
            <MovieIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Add Movie" />
        </ListItem>
        <ListItem component={Link} to="/manage-showtimes" button>
          <ListItemIcon>
            <ScheduleIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Showtime Management" />
        </ListItem>
        <ListItem component={Link} to="/booked-movies" button>
          <ListItemIcon>
            <BookIcon className="text-white" />
          </ListItemIcon>
          <ListItemText primary="Booked Movies" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
