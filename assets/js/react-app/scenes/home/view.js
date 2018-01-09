import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

export default props => {
  const featuredItems = [
    "https://res.cloudinary.com/dv8aqe8lm/image/upload/v1515357303/WhatsApp_Image_2017-12-30_at_1.49.29_PM_n7njby.jpg",
    "https://res.cloudinary.com/dv8aqe8lm/image/upload/v1515357309/WhatsApp_Image_2017-12-30_at_1.49.25_PM_xec6yl.jpg",
    "https://res.cloudinary.com/dv8aqe8lm/image/upload/v1515357301/WhatsApp_Image_2017-12-30_at_1.49.33_PM_jufrad.jpg"
  ];

  const FeaturedItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const FeaturedItem = styled.img`
    width: 75%;
    margin: 20px;
    border: 5px solid ${colors.green};
  `;

  return (
    <div className="home">
      <FeaturedItems>
        {featuredItems.map((item, index) => (
          <FeaturedItem src={item} key={index} />
        ))}
      </FeaturedItems>
    </div>
  );
};
