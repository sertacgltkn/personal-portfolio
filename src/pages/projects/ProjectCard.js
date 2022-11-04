import { Col } from "react-bootstrap";

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
    </Col>
  );
};
