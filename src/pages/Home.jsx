import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { setCurrrentPlayerURl, setUrlByUser } from "../app";
import { useDispatch, useSelector } from "react-redux";

import ChannelList from "../components/ChannelList";
import Navbar from "../components/Navbar";
import Player from "../components/Player";
import data from "../data";
import { useRef } from "react";

const Home = () => {
  const playerRef = useRef(null);
  const dispatch = useDispatch();
  const currentPlayerURL = useSelector((state) => state.app.currentPlayerURL);
  const urlByUser = useSelector((state) => state.app.urlByUser);

  console.log(data);
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: currentPlayerURL,
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} height={"content-fit"}>
            <Player options={videoJsOptions} onReady={handlePlayerReady} />
            {/* <TextField
              placeholder="Enter video url here"
              variant="outlined"
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button>
                      <IconButton>GO</IconButton>
                    </Button>
                  </InputAdornment>
                ),
              }}
              value={urlByUser}
              onChange={(event) => {
                dispatch(setUrlByUser({ urlByUser: event.target.value }));
              }}
            /> */}
          </Grid>

          <Grid item xs={12} md={4}>
            <Toolbar variant="dense">
              <Typography>Channels</Typography>
            </Toolbar>
            <Box sx={{ overflowY: "auto", height: "80vh" }}>
              <ChannelList listItems={data} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
