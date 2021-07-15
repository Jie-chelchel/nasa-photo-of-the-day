import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
function Header() {
  return (
    <Card>
      <div>
        <div>
          <span>
            <img src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" />
          </span>
          <h1>NASA APOD </h1>
          <nav>
            <Button>Log In</Button>
            <Button>Subscribe</Button>
            <Button>Contribute</Button>
          </nav>
        </div>
      </div>
    </Card>
  );
}

export default Header;
