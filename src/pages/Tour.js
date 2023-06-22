import {
  Paper,
  Box,
  Container,
  Typography,
  BottomNavigation,
} from "@mui/material";
import ControlledAccordions from "../components/Accordian";
import StandardImageList from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography
      variant="h3"
      component="h1"
      marginTop={3}>
      Explore the World in Vegas
    </Typography>
    <Box
      marginTop={3}
      sx={{ display: "flex" }}>
      <img
        src="https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        height={325}
      />
      <StandardImageList />
    </Box>
    <Box>
      <Typography
        variant="h6"
        component="h4"
        marginTop={3}>
        About this ticket
      </Typography>
      <Typography
        variant="paragraph"
        component="p"
        marginTop={3}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam minima
        dolor officiis quod veniam quo harum illo quasi eum ab rem cupiditate
        nostrum error, nihil non animi ducimus nobis ad doloremque at minus!
        Laborum debitis maxime, distinctio officiis deleniti soluta.
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography
        variant="h6"
        component="h4"
        marginTop={3}
        marginBottom={2}>
        Frequently Asked Questions
      </Typography>
      <ControlledAccordions />
    </Box>
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}>
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
