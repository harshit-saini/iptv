import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setCurrrentPlayerURl } from "../app/index";

const ChannelList = ({ listItems }) => {
  const dispatch = useDispatch();
  const currentPlayerURL = useSelector((state) => state.app.currentPlayerURL);

  return (
    <Box>
      <List>
        {listItems.map((item) => (
          <ListItem
            disablePadding
            key={item.name}
            onClick={() =>
              dispatch(setCurrrentPlayerURl({ currentPlayerURL: item.m3u8 }))
            }
          >
            <ListItemButton selected={item.m3u8 === currentPlayerURL}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChannelList;
