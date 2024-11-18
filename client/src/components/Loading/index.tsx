import React from "react";
import { CircularProgress, Typography } from "@mui/material";

export default function LoadingCom() {
  return (
    <div className="flex h-[100%] flex-col items-center justify-center px-4 py-4 dark:bg-dark-bg dark:text-white xl:px-6">
      <CircularProgress color="primary" />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Loading, please wait...
      </Typography>
    </div>
  );
}
