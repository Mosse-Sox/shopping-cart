import Nav from "./Nav";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Bean Supply Co.</h1>
      </div>
      <div className="header__price-box">
        <p>Total Items: </p>
        <p>Total Price: </p>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );
  return content;
};
export default Header;
