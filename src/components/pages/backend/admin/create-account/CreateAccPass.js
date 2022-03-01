import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../../store/StoreContext";
import { fetchData } from "../../../../helpers/fetchData";
import { InputTextLogin } from "../../../../helpers/FormInputs";
import { getUrlParam } from "../../../../helpers/functions-general";
import {
  setError,
  setIsCreatedAcc,
  setMessage,
} from "../../../../store/StoreAction";
import useLoadAll from "../../../../custom-hooks/useLoadAll";
import ModalError from "../../../modal/ModalError";

const CreateAccPass = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const { result } = useLoadAll(
    "/login-account/read-account-key.php",
    getUrlParam().get("key")
  );

  const initVal = {
    dunkin_password: "",
    dunkin_confirmpassword: "",
    dunkin_key: getUrlParam().get("key"),
  };

  const yupSchema = Yup.object({
    dunkin_password: Yup.string().required("Required"),
    dunkin_confirmpassword: Yup.string().required("Required"),
  });
  React.useEffect(() => {
    dispatch(setIsCreatedAcc(true));
  }, []);

  if (getUrlParam().get("key") === null || getUrlParam().get("key") === "") {
    return <p>The page you're trying to view has expired or invalid.</p>;
  }

  return (
    <>
      <section className="account">
        <div className="account__wrapper">
          <div className="account__header">
            <img src="./logo/dunkin.svg" alt="logo" />
            <h2> Create Password </h2>
            <p>Fill up all Fields</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                if (values.dunkin_password !== values.dunkin_confirmpassword) {
                  dispatch(setError(true));
                  dispatch(setMessage("Your password did not match."));
                  return;
                }
                console.log(values);
                fetchData(
                  setLoading,
                  "/login-account/update-account-new-pass.php",
                  values,
                  null,
                  "Access granted",
                  "Access denied",
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
                        label={"Password"}
                        type="text"
                        name="dunkin_password"
                        disabled={loading}
                        required
                      />
                    </div>
                    <div className="fillup">
                      <InputTextLogin
                        label={"Confirm Password"}
                        type="text"
                        name="dunkin_confirmpassword"
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
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>

      {store.error && <ModalError />}
    </>
  );
};

export default CreateAccPass;
