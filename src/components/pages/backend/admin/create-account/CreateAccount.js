import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";
import { StoreContext } from "../../../../store/StoreContext";
import { fetchData } from "../../../../helpers/fetchData";
import { InputTextLogin } from "../../../../helpers/FormInputs";
import ModalError from "../../../modal/ModalError";
import { setIsCreateEmailCheck } from "../../../../store/StoreAction";

const CreateAccount = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const initVal = {
    dunkin_aid: itemEdit ? itemEdit.dunkin_aid : "",
    dunkin_fullname: itemEdit ? itemEdit.dunkin_fullname : "",
    dunkin_email: itemEdit ? itemEdit.dunkin_email : "",
  };

  const yupSchema = Yup.object({
    dunkin_fullname: Yup.string().required("Required"),
    dunkin_email: Yup.string().email("Invalid Email").required("Required"),
  });
  React.useEffect(() => {
    dispatch(setIsCreateEmailCheck(true));
  }, []);

  return (
    <>
      <ModalError />
      <section className="account">
        <div className="account__wrapper">
          <div className="account__header">
            <img src="./logo/dunkin.svg" alt="logo" />
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
                  "/login-account/create-account.php",
                  values,
                  null,
                  "",
                  "Don't have account",
                  dispatch,
                  store,
                  true,
                  false,
                  navigate
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
                        name="dunkin_fullname"
                        // disabled={loading}
                        required
                      />
                    </div>
                    <div className="fillup">
                      <InputTextLogin
                        label={"Email"}
                        type="text"
                        name="dunkin_email"
                        // disabled={loading}
                        required
                      />
                    </div>

                    <div className="submit">
                      <button
                        className="submit__btn"
                        type="submit"
                        // disabled={loading}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="goto-pages">
              <h3>
                I Have Account
                <NavLink to={`${devNavUrl}/login`}>
                  <span>Login</span>
                </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </section>

      {store.error && <ModalError />}
    </>
  );
};

export default CreateAccount;
