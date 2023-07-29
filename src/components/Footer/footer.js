import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";

import Copyright from "./copyright";
import FooterWidgets from "./widgets";
import CTA from "./CTA";

const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        footer: {
            backgroundColor: theme.palette.secondary.main,
            padding: theme.spacing(1),
            "& a": {
                textDecoration: "none",
                color: theme.palette.text.primary,
                "&:hover": {
                    color: theme.palette.secondary.light
                }
            }
        },
    }));
    const classes = useStyles();
    return (
        <footer>
            <CTA />
            <FooterWidgets />
            <Copyright />
        </footer>
    );
};
export default Footer;