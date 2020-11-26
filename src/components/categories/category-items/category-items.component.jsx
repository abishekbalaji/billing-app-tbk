import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CategoryItem from "../category-item/category-item.component";
import { selectCategoriesList } from "../../../redux/categories/categories.selectors";

import { CategoriesContainer } from "./category-items.styles";

const CategoryItems = ({ categories }) => {
  console.log(categories);
  return (
    <CategoriesContainer>
      {Object.keys(categories).map((category) => (
        <CategoryItem
          key={categories[category].id}
          title={categories[category].title}
          name={category}
        />
      ))}
    </CategoriesContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesList,
});

export default connect(mapStateToProps)(CategoryItems);
