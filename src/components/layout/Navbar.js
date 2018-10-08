import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  return (
    <nav className="anv-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    firebase: state.firebase
  };
};

export default connect(mapStateToProps)(Navbar);
