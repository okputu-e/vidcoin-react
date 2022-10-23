import React, { useRef } from "react";
import { StyledNewsletter } from "../styled/Newsletter.styled";

export default function Newsletter() {
  const email = useRef();
  function handleSubmit(event) {
    event.preventDefault();
    const emailValue = email.current.value;

    alert(`${emailValue} has been added to the subscription list`);

    email.current.value = "";
  }
  return (
    <StyledNewsletter>
      <h3>Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          ref={email}
        />
        <button>Subscribe</button>
      </form>
    </StyledNewsletter>
  );
}
