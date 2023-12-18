import React, { useState } from "react";
import "./ActionCard.css";
import Modal from "react-bootstrap/Modal";
import Typography from "@mui/material/Typography";

const ActionCards = ({ size, data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      className="card-wrapper"
      style={{
        height: size === "big" ? "230px" : "190px",
        maxWidth: size === "big" ? "260px" : "140px",
      }}
      onClick={() => handleExpandClick()}
    >
      <div className="img-box">
        <img src={data?.img} alt="img" />
      </div>
      <div className="content-wrapper">
        <h6>{data?.headline}</h6>
      </div>
      <Modal
        show={expanded}
        fullscreen={true}
        onHide={() => {
          handleExpandClick();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Typography paragraph>{data?.headline}</Typography>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography paragraph>{data?.article}</Typography>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ActionCards;
