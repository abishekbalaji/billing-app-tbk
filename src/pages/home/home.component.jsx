import React from "react";

import CategoryItems from "../../components/categories/category-items/category-items.component";
import Checkout from "../../components/checkout/checkout.component";

import { HomePageContainer } from "./home.styles";

const HomePage = () => (
  <div>
    <HomePageContainer>
      <CategoryItems />
      <Checkout />
    </HomePageContainer>
  </div>
);

export default HomePage;
