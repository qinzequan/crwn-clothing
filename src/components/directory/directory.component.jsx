import DirectoryItem from '../directory-item/directory-item.component';
import './directory.style.scss';

const categorys = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: '/shop/hats',
    className: 'col-span-2',
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: '/shop/jackets',
    className: 'col-span-2',
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: '/shop/sneakers',
    className: 'col-span-2',
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: '/shop/womens',
    className: 'col-span-3',
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    route: '/shop/mens',
    className: 'col-span-3',
  },
];

const Directory = ({ className }) => {
  return (
    <div className={`directory ${className}`}>
      {categorys.map(category => (
        <DirectoryItem key={category.id} category={category} className={category.className} />
      ))}
    </div>
  );
};

export default Directory;
