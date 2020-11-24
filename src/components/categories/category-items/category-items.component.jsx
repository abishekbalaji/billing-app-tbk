import React from "react";

import CategoryItem from "../category-item/category-item.component";

import { CategoriesContainer } from "./category-items.styles";

const CategoryItems = () => (
  <CategoriesContainer>
    <CategoryItem />
    <CategoryItem />
    <CategoryItem />
  </CategoriesContainer>
);

export default CategoryItems;
