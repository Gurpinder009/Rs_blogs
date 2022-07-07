import React, { memo, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  StyledBlogContainer,
  StyledBlogItem,
  StyledBlogHeading,
  StyledBlogDate,
  StyledBlogDescription,
  StyledBlogButton,
  StyledInput,
} from "../../styles/styled_components";
import { getAllBlogData } from "../../Services/blogsRest";


function Blogs(props) {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, [props.data])


  function searchBlogs(e) {
    let pattern = new RegExp("" + e.target.value , "i")
    setData(props.data.filter((value) => (value.title.match(pattern) === null) ? false : true))
  }

  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <StyledBlogContainer>

      <StyledInput
        placeholder="Search"
        variants={itemAnimation}
        initial="hidden"
        animate="visible"
        onChange={(e) => searchBlogs(e)}
      />

      {data[0]?.title ? (
        data.map((value, index) => (
          <StyledBlogItem
            key={index}
            variants={itemAnimation}
            initial="hidden"
            animate="visible"
          >
            <StyledBlogDate>{value.created_at}</StyledBlogDate>
            <StyledBlogHeading>{value.title} </StyledBlogHeading>
            <StyledBlogDescription>{value?.metaTitle}</StyledBlogDescription>

            <StyledBlogButton
              whileHover={{
                color: "#3f3f3f",
                borderColor: "rgba(0, 0, 0, 0.4)",
                backgroundColor: "#fff",
              }}
              onClick={() => router.push("/blogs/" + value.slug)}
            >
              Read More <i className="fa-solid fa-arrow-right"> </i>{" "}
            </StyledBlogButton>
          </StyledBlogItem>
        ))
      ) : (
        <StyledBlogItem style={{ boxShadow: "none" }}>Loading...</StyledBlogItem>
      )}
    </StyledBlogContainer>
  );
}

export default memo(Blogs);




export async function getStaticProps() {
  let data = await getAllBlogData()
    .then((result) => result.data)
    .catch((error) => console.log(error));
   
  return {
    props: {
      data: data
    }
  };
}















// <StyledBlogButton
// whileHover={{
//   color: "#3f3f3f",
//   borderColor: "rgba(0, 0, 0, 0.4)",
//   backgroundColor: "#fff",
// }}
// onClick={() => router.push("/blogs/" + value.slug)}
// >
// <i className="fa-solid fa-close"> </i> Delete
// </StyledBlogButton>

// <StyledBlogButton
// whileHover={{
//   color: "#3f3f3f",
//   borderColor: "rgba(0, 0, 0, 0.4)",
//   backgroundColor: "#fff",
// }}
// onClick={() => navigate("/blogs/" + value.slug)}
// >
// <i className="fa-solid fa-arrow-up"> </i> Update
// </StyledBlogButton>