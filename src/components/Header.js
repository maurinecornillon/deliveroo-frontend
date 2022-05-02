import logo from "../img/Logo.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <section className="left-header">
            <img src={logo} alt="logo" />
          </section>
        </div>
      </header>
    </>
  );
};
export default Header;
