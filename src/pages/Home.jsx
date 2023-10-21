import { Box, Grid, Typography } from "@mui/material";

import ChannelList from "../components/ChannelList";
import Player from "../components/Player";
import data from "../data";
import { useRef } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const playerRef = useRef(null);
  const currentPlayerURL = useSelector((state) => state.app.currentPlayerURL);

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
      <Grid container direction={{ xs: "column-reverse", md: "row" }}>
        <Grid item xs={4} md={4}>
          <Typography>Channels</Typography>
          <Box sx={{ overflowY: "auto", height: "80vh" }}>
            <ChannelList listItems={data} />
          </Box>
        </Grid>
        <Grid item xs={8} md={8}>
          <div style={{ height: "100%", width: "100%" }}>
            <Player options={videoJsOptions} onReady={handlePlayerReady} />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
