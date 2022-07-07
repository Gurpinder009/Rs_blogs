export const routeList = (status) => {
  let data = [
    {
      name: "Home",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: "fa-brands fa-blogger-b",
    },
    {
      name: "Contact",
      path: "/contact_me",
      icon: "fa-solid fa-square-phone",
    },
  ];

  // data.push(
  //   status
  //     ? {
  //         name: "Add Blogs",
  //         path: "/blog/create",
  //         icon: "fa-solid fa-right-to-bracket",
  //       }
  //     : {
  //         name: "Sign Up",
  //         path: "/blog/create",
  //         icon: "fa-solid fa-right-to-bracket",
  //       }
  // );

  return data;
};
