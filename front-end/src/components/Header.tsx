import Nav from "./Nav";
import "../../public/styles/header.css";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header className="header">
      <div className="header__title-bar">
        <h1 className="title">Bean Supply Co.</h1>
      </div>
      <div className="header__price-box">
        <p>Total Items: </p>
        <p>Total Price: </p>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  );
  return content;
};
export default Header;
