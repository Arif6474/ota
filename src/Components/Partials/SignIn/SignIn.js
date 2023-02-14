import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import logo from "../../../assets/images/logo/header-logo.svg";
import close from "../../../assets/images/icon-svg/close.svg";
import eye from "../../../assets/images/icon-svg/eyeicon.svg";
function SignIn({
  openModal,
  setOpenModal,
  openRegisterModal,
  setOpenRegisterModal,
}) {
  const [closeModal, setCloseModal] = useState(true);
  const handleCloseModal = () => {
    setCloseModal(!closeModal);
    setOpenModal(!openModal);
  };
  const handleRegisterModal = () => {
    setOpenModal(!openModal);
    setOpenRegisterModal(!openRegisterModal);
  };
  return (
    <div>
      {closeModal && (
        <div
        data-aos-duration="800"
          data-aos="fade-down"
          className="modal fade signin-signup-modal"
          id="signInModal"
          tabindex="-1"
          aria-labelledby="singInModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button
                onClick={handleCloseModal}
                type="button"
                className="modal-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src={close} alt="close" />
              </button>
              <div className="modal-body">
                <img className="brand-logo" src={logo} alt="log" />
                <h1 className="title">Welcome!</h1>
                <h6>Log In to your account</h6>
                <form action="#">
                  <div className="input-field-wrapper sign-pad">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="+8801883839298"
                      />
                      <label for="phoneNumber">Your Phone Number</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control password"
                        placeholder="password"
                      />
                      <label for="password">Your Password</label>
                      <span className="passwordToglerBtn">
                        <img src={eye} alt="eyeicon" />
                      </span>
                    </div>
                    <div className="box-btn-wrapper">
                      <button type="submit" className="box-btn fill">
                        log in
                      </button>
                      <Link className="box-btn forget-pass">
                        forgot password?
                      </Link>
                    </div>
                  </div>
                </form>
                <p>
                  Don't have any account?{" "}
                  <span data-bs-toggle="modal" data-bs-target="#signUpModal">
                    <Link
                      onClick={handleRegisterModal}
                      className="create-account"
                    >
                      create one!
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignIn;
