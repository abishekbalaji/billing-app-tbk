import React from "react";

import CategoryItems from "../../components/categories/category-items/category-items.component";

import { HomePageContainer } from "./home.styles";

const HomePage = () => (
  <div>
    <HomePageContainer>
      <CategoryItems />
    </HomePageContainer>
  </div>
);

export default HomePage;
