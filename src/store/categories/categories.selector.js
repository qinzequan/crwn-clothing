import { createSelector } from 'reselect';

const selectCategoryReducer = state => state.categories;

export const selectCategories = createSelector([selectCategoryReducer], categoriesSlice => categoriesSlice.categories);

export const selectCategoriesMap = createSelector([selectCategories], categories =>
  categories.reduce((map, { items, title }) => {
    map[title.toLowerCase()] = items;
    return map;
  }, {})
);

export const selectIsLoading = createSelector([selectCategoryReducer], categoriesSlice => categoriesSlice.isLoading);

// export const selectCategoriesMap = state => {
//   console.log('selector fired');
//   const categoriesMap = state.categories.categories.reduce((acc, { title, items }) => {
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
//   return categoriesMap;
// };
