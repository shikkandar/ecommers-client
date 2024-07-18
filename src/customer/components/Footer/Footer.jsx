import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="bg-black text-white text-center mt-10"
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Company
          </Typography>
          <div>
            <Button variant="text" className="pb-5">
              About
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Blog
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Press
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Jobs
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Solution
          </Typography>
          <div>
            <Button variant="text" className="pb-5">
              Marketing
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Analytics
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Commerce
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Insights
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Documentation
          </Typography>
          <div>
            <Button variant="text" className="pb-5">
              Guides
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Legal
          </Typography>
          <div>
            <Button variant="text" className="pb-5">
              Claim
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Privacy
            </Button>
          </div>
          <div>
            <Button variant="text" className="pb-5">
              Terms
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            © 2024 My Company. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
