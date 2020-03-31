import React from "react";
import "./buttonPrimary.scss";

function ButtonPrimary() {
  function openModal(params) {
    let btnClass = document.querySelector(".form__wrapper");
    btnClass.classList.toggle("popUp");
  }
  return (
    <button className="registration  " onClick={openModal}>
      Login
    </button>
  );
}
export default ButtonPrimary;
