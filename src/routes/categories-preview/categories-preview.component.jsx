import { useContext } from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';
import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';

import { CategoriesPreviewContainer } from './categories-preview.styles';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <CategoriesPreviewContainer className="container">
      {isLoading ? <Spinner /> : Object.entries(categories).map(([title, products]) => <CategoryPreview key={title} title={title} products={products} />)}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;
