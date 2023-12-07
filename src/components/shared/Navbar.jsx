"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import logo from "../../assets/logo.jpg";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import Link from "next/link";
import Header from "./Header";
const navLinks = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "Category",
    pathname: "/categories/news?category=all-news",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <Header />
      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} alt="logo" width={100} height={100} />

            <Box className="w-full text-center">
              {navLinks.map((item) => (
                <Link
                  href={item.pathname}
                  key={item}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Button className="text-white  ">{item.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack
                direction={"row"}
                sx={{
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                <IconButton>
                  <Facebook />
                </IconButton>
                <IconButton>
                  <YouTube />
                </IconButton>
                <IconButton>
                  <Instagram />
                </IconButton>
                <IconButton>
                  <Twitter />
                </IconButton>
                <IconButton>
                  <LinkedIn />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
