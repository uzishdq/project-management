import { Typography } from "@mui/material";
import React from "react";

type ErrorProps = {
  title: string;
};
export default function Error({ title }: ErrorProps) {
  return (
    <div className="flex h-[100%] flex-col items-center justify-center px-4 py-4 dark:bg-dark-bg dark:text-white xl:px-6">
      <Typography variant="h6" sx={{ mt: 2 }}>
        An error occured while fetching {title}
      </Typography>
    </div>
  );
}
