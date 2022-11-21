import { Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "./GridComp.css";

function GridComp({ data }) {
  return (
    <>
      <Grid container rowSpacing={2} columnSpacing={2} className="MarginTop">
        {data?.map((row) => (
          <Grid
            container
            item
            xs={4}
            className="container"
            justifyContent="center"
            alignItems="center"
          >
            <Paper elevation={3}>
              <Card className="card">
                <div
                  style={{
                    display: "inline-grid",
                    marginTop: "10px",
                    width: "50%",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    className="imageSize"
                    image={row?.thumbnail}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      window.open("https://www.apple.com/store", "_blank")
                    }
                  />
                </div>
                <CardContent>
                  <Typography
                    gutterBottom
                    component="div"
                    style={{
                      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                      fontWeight: "bold",
                    }}
                  >
                    {row.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    style={{
                      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    Price:&nbsp; {row.price}$
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    style={{
                      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                      fontSize: "14px",
                      color: "rgba(0, 0, 0, 0.87)",
                    }}
                  >
                    {row.description}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default GridComp;
