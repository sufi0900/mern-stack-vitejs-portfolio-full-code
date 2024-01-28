// BlogDetail.js
import { useEffect, useState } from "react";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import Grid from "@mui/material/Grid";
import { getTour, clearTour } from "./redux/features/tourSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spin from "./Spin";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const { tour } = useSelector((state) => ({ ...state.tour }));
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
    dispatch(clearTour());

    // Simulate loading delay
    const delay = 1500; // 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [dispatch, id]);
  return (
    <>
      {" "}
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        className="bgwhite"
      >
        <Grid
          spacing={2}
          padding={2}
          item
          lg={12}
          md={12}
          sm={12}
          xl={12}
          xs={12}
          className="blogsvg "
          style={{ marginTop: "10px", overflow: "hidden" }}
        >
          <button
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <ListItem className="">
              <ListItemAvatar className="">
                <Avatar
                  style={{
                    background: "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50px", // Adjust the width as needed
                    height: "50px", // Maintain a square aspect
                  }}
                  data-aos="zoom-in-down"
                >
                  <img
                    className="i-swing"
                    src="https://res.cloudinary.com/dtvtphhsc/image/upload/v1692790326/logo_dfobvx.png"
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary=""
                data-aos="zoom-in"
                className="ListItemTextSkill"
              />
            </ListItem>
          </button>
          {isLoading ? (
            <Spin />
          ) : (
            <div className="ToPHeading2">
              <h1 data-aos="zoom-in" style={{ textAlign: "center" }}>
                {tour.title}
              </h1>

              <br />
              <div className="flex">
                {" "}
                <img
                  src={tour.imageFile2}
                  alt="Img"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <br />

              <div
                className="QuillDescription"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <div className="QuillDescription flex">
                  <p dangerouslySetInnerHTML={{ __html: tour.description }} />
                </div>
              </div>
            </div>
          )}
        </Grid>{" "}
      </Grid>
    </>
  );
};

export default BlogDetail;
