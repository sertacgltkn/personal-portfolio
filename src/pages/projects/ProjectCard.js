import { Button } from "@mui/material";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-imgbx">
        <img
          alt=""
          style={{ height: "254px", width: "100%", cursor: "pointer" }}
          src={imgUrl}
        />

        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <Link target="_blank" to="https://github.com/sertacgltkn/personal-portfolio">
      <Button>
        Go to Project
      </Button>
      </Link>
    </Col>
  );
};
