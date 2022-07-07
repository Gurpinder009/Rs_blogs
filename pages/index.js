import React from "react";
import {
  StyledBlogButton,
  StyledBlogDate,
  StyledBlogDescription,
  StyledBlogHeading1,
} from "../styles/styled_components";
import styled from "styled-components";
import { motion } from "framer-motion";

export function headingAnimation(delayValue,stiffValue) {

  return {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: (delayValue)?delayValue:0.4,
        duration: 1,
        type:"spring",
        stiffness:(stiffValue)?stiffValue:100
      },
    },
  };
}

export default function Home() {
  return (
    <>
      <StyledHeader>
        <StyledHeaderDescription>
          <StyledBlogContainerHeading variants={headingAnimation(0.4,500)}
          initial="hidden"
          animate="visible">
            Welcome to RSBlogs
          </StyledBlogContainerHeading>
          <StyledHeaderDesc variants={headingAnimation(0.8,500)}
          initial="hidden"
          animate="visible">
            I delightful way to show creativity.
          </StyledHeaderDesc>
        </StyledHeaderDescription>
      </StyledHeader>

      <StyledHomeBlogContainer>
        <StyledBlogContainerHeading>Recent Blogs</StyledBlogContainerHeading>

        <StyledHomeBlogItem
          variants={headingAnimation(1)}
          initial="hidden"
          animate="visible"
        >
          <span>
            <StyledHomeBlogDate>13 JUN 2001</StyledHomeBlogDate>
            <StyledHomeBlogItemHeading>
              Best Laptops To Buy in 2022 - Laptop Buying Guide between 40-70k
              INR
            </StyledHomeBlogItemHeading>
            <StyledHomeBlogItemDesc>
              If you are confused between updating your Windows 10 PC to Windows
              11, then this blog is for you!
            </StyledHomeBlogItemDesc>
            <StyledHomeBlogItemButton
              whileHover={{
                color: "#3f3f3f",
                borderColor: "rgba(0, 0, 0, 0.4)",
                backgroundColor: "#fff",
              }}
            >
              Read More -{">"}
            </StyledHomeBlogItemButton>
          </span>
        </StyledHomeBlogItem>

        <StyledHomeBlogItem
          variants={headingAnimation(1)}
          initial="hidden"
          animate="visible"
        >
          <span>
            <StyledHomeBlogDate>13 JUN 2001</StyledHomeBlogDate>
            <StyledHomeBlogItemHeading>
              {" "}
              - Laptop between 40-70k INR
            </StyledHomeBlogItemHeading>
            <StyledHomeBlogItemDesc>
              If you are confused between updating your Windows 10 PC to Windows
              11, then this blog is for you!
            </StyledHomeBlogItemDesc>
            <StyledHomeBlogItemButton
              whileHover={{
                color: "#3f3f3f",
                borderColor: "rgba(0, 0, 0, 0.4)",
                backgroundColor: "#fff",
              }}
            >
              Read More -{">"}
            </StyledHomeBlogItemButton>
          </span>
        </StyledHomeBlogItem>

        <StyledHomeBlogItem
          variants={headingAnimation(1)}
          initial="hidden"
          animate="visible"
        >
          <span>
            <StyledHomeBlogDate>13 JUN 2001</StyledHomeBlogDate>
            <StyledHomeBlogItemHeading>
              Best Laptops To Buy in 2022 - Laptop Buying Guide between 40-70k
              INR
            </StyledHomeBlogItemHeading>
            <StyledHomeBlogItemDesc>
              If you are confused between updating your Windows 10 PC to Windows
              11, then this blog is for you!
            </StyledHomeBlogItemDesc>
            <StyledHomeBlogItemButton
              whileHover={{
                color: "#3f3f3f",
                borderColor: "rgba(0, 0, 0, 0.4)",
                backgroundColor: "#fff",
              }}
            >
              Read More -{">"}
            </StyledHomeBlogItemButton>
          </span>
        </StyledHomeBlogItem>
      </StyledHomeBlogContainer>
    </>
  );
}

const StyledHeader = styled.div`
  /* border:2px solid green; */
  height: 28em;
  margin: 0;
  width: 100%;
  display: grid;
  background-image: url("https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  bottom: 4.5em;
  grid-template-columns: 1fr;
  box-shadow: 1px 1px 11px rgba(0,0,0,0.3);
`;

const StyledHeaderDescription = styled(motion.div)`
  display: grid;
  align-content: center;
  justify-items: center;
`;
// const StyledImage = styled.img`
// height:100%;
// width:100%;
// margin:0 auto;
// /* border:2px solid red; */
// `

const StyledHomeBlogContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 2em 4em 2em;

  flex-wrap: wrap;
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
  @media screen and (max-width: 750px) {
    padding: 0;
  }
`;
const StyledBlogContainerHeading = styled(StyledBlogHeading1)`
  width: 100%;
  text-align: center;
  margin-bottom: 1em;
`;

const StyledHomeBlogItem = styled(motion.div)`
  /* border:2px solid green; */
  box-shadow: 0 0 10px rgb(0 0 0 / 0.28);
  width: 18em;
  margin: 0.8em;
  padding: 1.2em 1.6em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 750px) {
    margin: 0.8em 0;
    width: 90%;
  }
`;
const StyledHomeBlogDate = styled(StyledBlogDate)`
  font-size: small;
  margin-bottom: 0.2em;
`;
const StyledHomeBlogItemHeading = styled.h1`
  font-size: 1.2em;
  text-transform: capitalize;
  color: #3f3f3f;

  margin-bottom: 0.2em;
`;
const StyledHomeBlogItemDesc = styled(StyledBlogDescription)`
  font-size: small;
`;

const StyledHomeBlogItemButton = styled(StyledBlogButton)`
  padding: 0.6em 1em;
`;

const StyledHeaderDesc = styled(motion.p)`
  text-align: center;
  color: #1c1c1c;
  width: 70%;
`;
