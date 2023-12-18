import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Modal from "react-bootstrap/Modal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsCard({ article }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      className="card-wrapper"
      sx={{
        maxWidth: 330,
        height: 260,
        margin: 0.5,
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      onClick={() => handleExpandClick()}
    >
      <CardMedia
        component="img"
        height="220"
        image={article?.img}
        alt="Article"
      />
      <CardContent>
        <Typography variant="subtitle2" color="text.dark">
          {article?.headline.split(" ").slice(0, 5).join(" ") + "..."}
        </Typography>
      </CardContent>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        style={{
          position: "absolute",
          bottom: -40,
          backgroundColor: "#fff",
          zIndex: 9,
        }}
      >
        <Modal
          show={expanded}
          fullscreen={true}
          onHide={() => {
            handleExpandClick();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <Typography paragraph>{article?.headline}</Typography>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Typography paragraph>{article?.article}</Typography>
          </Modal.Body>
        </Modal>
      </Collapse>
    </Card>
  );
}
