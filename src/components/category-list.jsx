import React from 'react';
import CategoryListItem from './category-list-item';

const CategoryList = ({ categories, onSelect, onToggle }) =>
        <ul className="category-list">
          {categories.map((category, index)=>
            <CategoryListItem
              key={index}
              category={category}
              onSelect={onSelect}
              onToggle={onToggle}>></CategoryListItem>)}
        </ul>;

export default CategoryList;