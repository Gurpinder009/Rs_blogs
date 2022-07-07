import React, { useEffect, useState } from "react";
import { getBlogData } from "../../Services/blogsRest";
import { useRouter } from 'next/router'
import { StyledBlogDate, StyledBlogDescription, StyledBlogHeading1, StyledBlogItem, StyledBlogPage, StyledContainer, StyledImage, StyledMetaTitle } from "../../styles/styled_components";
export default function Blog({ data }) {

  return (
    <StyledContainer>

      {data[0]?.title ?
        <StyledBlogPage>
          <StyledBlogDate>{data[0]?.created_at}</StyledBlogDate>
          <StyledBlogHeading1>{data[0]?.title}</StyledBlogHeading1>
          <StyledMetaTitle>{data[0]?.metaTitle}</StyledMetaTitle>
          <StyledImage src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png" alt="loading.." />
          {data.map((value, index) => (
            <StyledBlogDescription key={index}>
              {value?.content}
            </StyledBlogDescription>
          ))}
        </StyledBlogPage>
        :
        <StyledBlogItem style={{ boxShadow: "none" }}>Loading...</StyledBlogItem>}
    </StyledContainer>
  );
}


export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: "ducimus-dolor-est-nostrum-enim-sequi-debitis-deserunt" },
      }
    ],
    fallback: false
  }
}


export async function getStaticProps(context) {
  let { params } = context;
  let data = await getBlogData(params.slug)
    .then((result) => result.data)
    .catch((error) => console.log(error));
  return {
    props: {
      data: data
    }
  }

}