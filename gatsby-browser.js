import React from "react";
import "./src/styles/global.css";
import RootLayout from "./src/components/global/layouts/RootLayout";
export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;