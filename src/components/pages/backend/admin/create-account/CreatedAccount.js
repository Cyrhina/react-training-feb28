import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const CreatedAccount = () => {
  return (
    <>
      <section className="account">
        <div className="account__wrapper">
          <div className="account__header">
            <img src="./logo/dunkin-violet.svg" alt="logo" />

            <h2 className="t-center">Congrats Dunkinian's!</h2>
            <br />
            <p>
              You successfully created your account to dunkins you can login now
              to our website. Welcome and Enjoy!
            </p>

            <div className="goto-pages ">
              <h3>
                <NavLink to={`${devNavUrl}/login`}>
                  <h2>Go Back to Login</h2>
                </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatedAccount;
