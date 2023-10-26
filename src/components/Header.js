function Header() {
  return (
    <div className="main-header">
      <div className="logo">
        <span className="watch">Watch</span>
        <span className="flix">Flix</span>
      </div>
      <div className="nav-links">
        <div className="flex-row">
          <div>Movies</div>
          <div>TV Series</div>
          <div>Documentaries</div>
          <div>Categories</div>
        </div>
      </div>
      <div className="right">
        <div className="flex-row">
          <div>
            <img src="/search.svg" alt="" />
          </div>
          <div>
            <img src="/notification.svg" alt="" />
          </div>
          <div className="sign-up">sign up</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
