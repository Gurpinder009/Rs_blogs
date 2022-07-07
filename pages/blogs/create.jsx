import React from "react";
import { storeBlogData } from "../../Services/blogsRest";
import {headingAnimation} from "../index"
import {
  StyledBlogForm,
  StyledBlogHeading1,
  StyledContainer,
  StyledTextArea,
  StyledError,
  StyledButtonWrapper,
  StyledInputWrapper,
  StyledBlogButton,
} from "../../styles/styled_components";
export default function AddBlogs() {

  function handleSubmit(e){
    e.preventDefault();
    let data = {
      title:e.target[0].value,
      metaTitle:e.target[1].value,
      slug:e.target[2].value,
      content:e.target[3].value
    }
    storeBlogData(data).then(res=>console.log(res.data)).catch((error)=>console.log(error));
  }


  return (
    <StyledContainer>
      <StyledBlogForm onSubmit={(e) => handleSubmit(e)} variants={headingAnimation()} initial="hidden" animate="visible">
        <StyledBlogHeading1 style={{ textAlign: "center" }}>
          Add New Blogs
        </StyledBlogHeading1>

        <StyledInputWrapper>
          <StyledTextArea rows={2} placeholder="Heading" name="title" />
          <StyledError>working</StyledError>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledTextArea rows={2} placeholder="Meta Title" name="meta_title" />
          <StyledError>working</StyledError>
        </StyledInputWrapper>

        <StyledInputWrapper>
          <StyledTextArea rows={2} placeholder="Slug" name="slug" />
          <StyledError>working</StyledError>
        </StyledInputWrapper>


        <StyledInputWrapper>
          <StyledTextArea rows={3} placeholder="Content" name="content" />
          <StyledError>working</StyledError>
        </StyledInputWrapper>

        <StyledButtonWrapper>
          <StyledBlogButton type="submit">Submit</StyledBlogButton>
          <StyledBlogButton type="reset">Reset</StyledBlogButton>

        </StyledButtonWrapper>

      </StyledBlogForm>
    </StyledContainer>
  );
}
