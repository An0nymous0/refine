import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";

import { CreateInferencerConfig } from "@/types";

export const ErrorComponent: CreateInferencerConfig["errorComponent"] = ({
    error,
}) => {
    if (error) {
        return (
            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "200px",
                }}
            >
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <div dangerouslySetInnerHTML={{ __html: error ?? "" }} />
                </Alert>
            </Box>
        );
    }

    return null;
};
