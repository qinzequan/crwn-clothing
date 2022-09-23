import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.style.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview ">
      <h2 className="category-preview__title">
        <Link to={`/shop/${title}`}>{title}</Link>
      </h2>
      <div className="category-preview__products">
        {products.slice(0, 4).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
