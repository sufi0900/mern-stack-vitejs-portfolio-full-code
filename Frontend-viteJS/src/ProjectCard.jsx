/* eslint-disable react/no-unescaped-entities */
import Card from "react-bootstrap/Card";

import Grid from "@mui/material/Grid";
import { GitHub, OpenInNew } from "@mui/icons-material";

function ProjectCard({ imageFile, title, link, toptext1 }) {
  return (
    <Grid
      item
      lg={4}
      sm={12}
      xl={4}
      md={6}
      xs={12}
      padding={2}
      className="flex"
    >
      {" "}
      <Card
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="400"
        className="projectCard img-container"
        style={{
          padding: "10px",
          overflow: "hidden",
          height: "auto",
        }}
      >
        <h1
          style={{
            background: "#ff014f",
            borderRadius: "10px",
            color: "white",
            padding: "5px",
          }}
        >
          {" "}
          {title}{" "}
        </h1>
        <br />
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <Card.Img variant="top" src={imageFile} />
        </div>

        <div className="btn-group ">
          <Card.Link href={link} target="GitHub" className="btn  m-1">
            {" "}
            <GitHub />{" "}
          </Card.Link>
          <Card.Link href={toptext1} target="OpenInNew" className="btn  m-1">
            <OpenInNew />
          </Card.Link>
        </div>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
