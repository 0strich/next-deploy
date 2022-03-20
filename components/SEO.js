import React from "react";
import { NextSeo } from "next-seo";

const SEO = () => {
  return (
    <NextSeo
      title="saltmine next test homepage"
      description="This is saltmien next text homepage"
      openGraph={{
        type: "website",
        url: "",
        title: "",
        description: "",
        images: [
          {
            url: "",
            width: 800,
            height: 400,
          },
        ],
      }}
    />
  );
};

export default SEO;
