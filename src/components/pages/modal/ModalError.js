import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { setError } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const ModalError = ({ msg }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setError(false));
  };

  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header">
            <button className="modaldashClose" onClick={handleClose}>
              <RiCloseLine />
            </button>
          </div>

          <div className="dashmodal__body fixed--height  ">
            <div className="text--center dashmodal__body__msg ">
              <span className=" dashmodal__body__error">
                <i>
                  <FaExclamationCircle />
                </i>
              </span>
              <h2>Error Alerts</h2>
              <p>{store.message}</p>
            </div>

            <div className="dashmodal__footer">
              <ul>
                <li>
                  <button
                    className="dashmodal__btn btn--error"
                    onClick={handleClose}
                  >
                    Okey
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalError;
