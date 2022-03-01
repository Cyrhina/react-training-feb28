import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../../store/StoreContext";
import { fetchData } from "../../../../helpers/fetchData";
import { InputTextLogin } from "../../../../helpers/FormInputs";

const ForgotPass = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const initVal = {
    signup_aid: itemEdit ? itemEdit.signup_aid : "",
    signup_email: itemEdit ? itemEdit.signup_email : "",
    signup_password: itemEdit ? itemEdit.signup_password : "",
  };

  const yupSchema = Yup.object({
    signup_email: Yup.string().email("Invalid Email").required("Required"),
    signup_password: Yup.string().required("Required"),
  });

  return (
    <>
      <section className="account">
        <div className="account__wrapper">
          <div className="account__header">
            <img src="./logo/dunkin-violet.svg" alt="logo" />
            <h2> Sign Up </h2>
            <p>Fill up all Fields</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                fetchData(
                  setLoading,
                  "/admin/fbs_signup/read-costumer-login.php",
                  values,
                  null,
                  "",
                  "Don't have account",
                  dispatch,
                  store,
                  true,
                  false
                );
              }}
            >
              {(props) => {
                // props.values.users_password = Math.random().toString(36).substr(7);

                return (
                  <Form>
                    <div className="fillup">
                      <InputTextLogin
                        label={"Email"}
                        type="text"
                        name="signup_email"
                        disabled={loading}
                        required
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="goto-pages">
              <h3>
                I don't have account yet
                <NavLink to={`${devNavUrl}/createaccount`}>
                  <span>Sign Up</span>
                </NavLink>
              </h3>
              <h3>
                I remember my password i want to
                <NavLink to={`${devNavUrl}/login`}>
                  <span>Login</span>
                </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPass;
