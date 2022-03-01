import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../store/StoreContext";
import { fetchData } from "../../../helpers/fetchData";
import { InputTextLogin } from "../../../helpers/FormInputs";

const Signup = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const initVal = {
    dunkin_aid: itemEdit ? itemEdit.dunkin_aid : "",
    dunkin_email: itemEdit ? itemEdit.dunkin_email : "",
    dunkin_password: itemEdit ? itemEdit.dunkin_password : "",
  };

  const yupSchema = Yup.object({
    dunkin_email: Yup.string().email("Invalid Email").required("Required"),
    dunkin_password: Yup.string().required("Required"),
  });

  return (
    <>
      <section className="account">
        <div className="account__wrapper">
          <div className="account__header">
            <img src="./logo/dunkin-violet.svg" alt="logo" />
            <h2> Login Account </h2>
            <p>Fill up all Fields</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                fetchData(
                  setLoading,
                  "/admin/login-account/read-account-login.php",
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
                        label={"Full Name"}
                        type="text"
                        name="dunkin_email"
                        disabled={loading}
                        required
                      />
                    </div>
                    <div className="fillup">
                      <InputTextLogin
                        label={"Email"}
                        type="text"
                        name="dunkin_email"
                        disabled={loading}
                        required
                      />
                    </div>

                    <div className="submit">
                      <button
                        className="submit__btn"
                        type="submit"
                        // disabled={loading}
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="goto-pages">
            <h3>
              Need an Account?
              <NavLink to={`${devNavUrl}/createaccount`}>
                <span>Create an account</span>
              </NavLink>
            </h3>
            <h3>
              Did you forget your password?
              <NavLink to={`${devNavUrl}/forgotpass`}>
                <span>Forget password</span>
              </NavLink>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
