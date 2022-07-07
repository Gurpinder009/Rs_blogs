import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

export const StyledNavbar = styled(motion.nav)`
  height: 4em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #1c1c1c;
  /* border:2px solid green; */
  padding: 0 2em;
  color: #fff;
  border-radius: 20px;
  position: sticky;
  z-index: 3;
  margin: 5px 28px;
  top: 0.2em;

  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 750px) {
    margin: 0;
    top: 0;
    border-radius: 0;
  }
`;

export const StyledNavHeading = styled(motion.h1)`
  font-size: 1.4em;
  font-weight: 600;
`;

/* border:2px solid red; */
export const StyledNavList = styled(motion.ul)`
  display: flex;
  list-style-type: none;
  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const StyledNavItem = styled(motion.li)`
  /* border:2px solid blue; */
  text-decoration: none;
  margin: 0 0.6em;
  font-size: normal;
  cursor: pointer;

  @media screen and (max-width: 750px) {
    /* text-align:center;  */
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  & i {
    font-size: medium;
    margin-right: 0.4em;
  }
`;

export const StyledNavMenu = styled(motion.span)`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 750px) {
    display: inline-block;
  }
`;

export const StyledDrawer = styled(motion.ul)`
  position: fixed;
  list-style: none;
  top: 0;
  z-index: 4;
  height: 100%;
  width: 16em;
  padding: 0.5em 0.5em;
  overflow-y: scroll;
  background-color: white;
  box-shadow: 8px 2px 10px rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 750px) {
    display: none;
  }
`;

export const StyledDrawerItem = styled(motion.li)`
  padding: 0.6em 2em;
  margin-bottom: 0.2em;
  border-radius: 4px;
  cursor: pointer;
  & > i {
    margin-right: 1em;
  }
`;

export const StyledFooter = styled.footer`
  background-color: #1c1c1c;
  min-height: 7em;
  color: white;
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 0.5em;
  align-content: center;
  flex-wrap: wrap;
  & > div > div > i {
    margin-right: 0.7em;
    font-size: larger;
    cursor: pointer;
  }
  & > div > div > i:hover {
    color: #4daea3;
  }
  & > div {
    width: 100%;
    text-align: center;
    font-size: small;
  }
`;

export const StyledWrapper = styled.div`
  /* border:2px solid green; */
  min-height: 90vh;
  max-width: 100em !important;
  margin: 0 auto;
`;

export const StyledHeading = styled.h1`
  margin-top: 2em;
  color: #1c1c1c;
  text-align: center;
`;

export const StyledBlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: 2em;
  grid-auto-rows: minmax(1em, max-content);
  padding: 4em 2em;
`;

export const StyledBlogItem = styled(motion.div)`
  grid-column-start: 1;
  grid-column-end: 10;
  padding: 1.5em 2em;
  border-radius: 8px;
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4); */
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1000px) {
    grid-column-end: 11;
  }

  @media screen and (max-width: 750px) {
    grid-column-end: 13;
  }
`;

export const StyledInput = styled(motion.input)`
  grid-column-start: 1;
  grid-column-end: 10;
  height: 4em;
  align-items: center;
  border-radius: 25px;
  padding: 0 1.5em;
  font-size: medium;
  outline: none;
  border: none;
  color: #3f3f3f;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1000px) {
    grid-column-end: 11;
  }

  @media screen and (max-width: 750px) {
    grid-column-end: 13;
  }
`;

export const StyledBlogDate = styled.p`
  font-weight: 300;
`;

export const StyledBlogHeading = styled(motion.div)`
  margin: 0;
  color: #3f3f3f;
  font-weight: bolder;
  font-size: 1.7rem;
  margin-bottom: 0.3em;
`;

export const StyledBlogDescription = styled.p`
  margin-bottom: 0.8em;
`;

export const StyledBlogButton = styled(motion.button)`
  padding: 0.8em 1.6em;
  border: 1.5px solid #fff;
  border-radius: 5px;
  margin-right: 0.5em;
  background-color: #3f3f3f;
  color: #fff;
  cursor: pointer;
`;

export const StyledContainer = styled.div`
  text-align: justify !important;
  /* border: 2px solid green; */
  display: grid;
  padding: 1em 0;
  /* max-width: 77em; */
  /* margin:0 auto; */
  grid-template-columns: repeat(12, 1fr);
  @media screen and (max-width: 750px) {
    padding: 0.5em 0;
  }
`;

export const StyledBlogHeading1 = styled(StyledBlogHeading)`
  margin-bottom: 0.5em;
  font-size: xx-large;
  font-weight: bolder;
`;

export const StyledBlogPage = styled.div`
  /* border: 2px solid red; */
  padding: 2.6em 1.2em;
  /* box-shadow: 0 0 8px rgba(0,0,0,0.4) !important; */
  grid-column-start: 2;
  grid-column-end: 10;
  border-radius: 8px;
  @media screen and (max-width: 1000px) {
    border-radius: 0;
    grid-column-start: 1;
    grid-column-end: 12;
    padding: 4em 2.6em;
  }
`;
export const StyledMetaTitle = styled.div`
  font-style: italic;
`;

export const StyledImage = styled.img`
  width: 100%;
  margin: 1em 0;
  height: 20em;
  border-radius: 10px;
`;

export const StyledBlogForm = styled(motion.form)`
  grid-column-start: 3;
  grid-column-end: 11;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  border: 2px solid green;
  border-radius: 6px;
  overflow: hidden;
  padding: 5em 2.8em;
  display: grid;
  row-gap: 2em;
  outline: 0;
  border: none;
  margin: 2em 0;
  @media screen and (max-width: 1000px) {
    grid-column-start: 2;
    grid-column-end: 12;
  }

  @media screen and (max-width: 750px) {
    grid-column-start: 1;
    grid-column-end: 13;
    box-shadow: none;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  resize: vertical;
  font-size: 1.5em;
  padding: 0.8em 0.8em;
  outline: none;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  border-radius: 1px;
  border: none;
  background-color: rgba(229, 231, 235, 0.7);
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledError = styled.small`
  color: red;
  display: block;
  display: none;
  position: absolute;
`;

export const StyledButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 3.6em;
  column-gap: 0.8em;
  & > button {
    margin: 0;
    letter-spacing:1px;
  }
 

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
    row-gap: 1em;
  }
`;
