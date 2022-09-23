import './directory-item.style.scss';

const DirectoryItem = ({ category, className }) => {
  const { title, imageUrl, route } = category;

  const onClickHandler = () => {
    window.history.pushState({}, '', route);
    const event = new PopStateEvent('popstate');
    window.dispatchEvent(event);
  };

  return (
    <div onClick={onClickHandler} className={`directory-item ${className}`}>
      <div className="directory-item__background" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="directory-item__content-box">
        <div className="directory-item__title">{title}</div>
        <div className="directory-item__text">Shop Now</div>
      </div>
    </div>
  );
};

export default DirectoryItem;
