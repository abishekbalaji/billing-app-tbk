import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategoriesList } from "../../../redux/categories/categories.selectors";
import { displayItems } from "../../../redux/items-display/items.actions";

class CategoryItem extends React.Component {
  handleClick = (e) => {
    console.log(e.target.name);
    const name = e.target.name;
    const categoryItems = this.props.categoriesList[name].items;
    console.log(categoryItems);
    this.props.displayItems(categoryItems);
  };
  render() {
    const { name, title } = this.props;
    return (
      <div>
        <button onClick={this.handleClick} name={name} >
          {title}
        </button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  categoriesList: selectCategoriesList,
});

const mapDispatchToProps = (dispatch) => ({
  displayItems: (categoryItems) => dispatch(displayItems(categoryItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
