import React from "react";

function Navbar() {

    const ColoredLine = ({ color }) => (
        <hr
            className="container"
            style={{
                color: color,
                backgroundColor: color,
                height: 2,
                width:"400px",
                marginTop:2,
            }}
        />
    );

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{marginLeft:"10em",marginRight:"10em",backgroundColor:"#212529"}}>
        <div className="container d-flex justify-content-center">
          <a
            className="navbar-brand"
            style={{ color: "white", fontSize: "3em" }}
            href= "/"
          >
            Contacts
          </a>
        </div>
      </nav>
    <ColoredLine className="my-0" color="#542b2b"/>
     
    </>
  );
}

export default Navbar;
