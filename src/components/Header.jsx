function Header() {
  return (
    <div className="header">
      <img
        className="header__img"
        src="./assets/images/avatar-jessica.jpeg"
        alt="user headshot"
      />
      <h1 className="header__name">Jessica Randall</h1>
      <h2 className="header__location">London, United Kingdom</h2>
      <p className="header__text">
        &ldquo;Front-end developer and avid reader.&rdquo;
      </p>
    </div>
  );
}

export default Header;
