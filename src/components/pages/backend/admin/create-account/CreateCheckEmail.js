import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const CreateCheckEmail = () => {
  return (
    <>
      <section className="account">
        <div className="account__wrapper">
          <div className="account__header">
            <img src="./logo/dunkin-violet.svg" alt="logo" />

            <h2 className="t-center">Check Your inbox!</h2>
            <br />
            <p>
              If your email is correct you will recieve a email for creating
              your account, Please wait a moment.
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

export default CreateCheckEmail;
