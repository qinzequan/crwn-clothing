const MyLink = ({ to, children }) => {
  const clickHandler = e => {
    e.preventDefault();
    window.history.pushState({}, '', to);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <a href={to} onClick={clickHandler}>
      {children}
    </a>
  );
};

export default MyLink;
