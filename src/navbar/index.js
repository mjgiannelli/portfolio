function Navbar() {
    // Use the render function to return JSX component       
    return (
      // <!-- Top Navigation Menu -->
<nav class="topnav">
  <a href="#home" class="active">Mark Giannelli Portfolio</a>
  {/* <!-- Navigation links (hidden by default) --> */}
  <div id="myLinks">
    <a href="#about-me">About Me</a>
    <a href="#portfolio">Portforlio</a>
    <a href="#contact">Contact Me:</a>
  </div>
  {/* <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links --> */}
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</nav>
    )
  }

  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  export default Navbar;
