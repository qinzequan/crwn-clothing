import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesMap, selectIsLoading } from '../../store/categories/categories.selector';
import { CategoryContainer, Title, Products } from './category.styles';

const Category = () => {
  const { category: title } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <CategoryContainer className="container">
      <Title>{title}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <Products>
          {categories[title]?.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Products>
      )}
    </CategoryContainer>
  );
};

export default Category;
