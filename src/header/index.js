function Header() {
    // Use the render function to return JSX component       
    return (
      <header>
        <h1>
          <a href="https://mjgiannelli.github.io/mark-giannelli-portfolio/">Mark Giannelli <br /> Portfolio</a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header;