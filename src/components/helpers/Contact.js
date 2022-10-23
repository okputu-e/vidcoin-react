import { StyledContact } from "../styled/Contact.style";

import React from "react";

export default function Contact() {
  return (
    <StyledContact>
      <h3>Contact</h3>
      <p>
        <span>Address:</span> 2, Boys place off girls house, man road, lagos
        state, Nigeria
      </p>
      <p>
        <span>Phone:</span> <a href="tel:+2348132790167">+2348132790167</a>
      </p>
      <p>
        <span>Email:</span>
        <a href="mailto: sadorafiu06@gmail.com"> sadorafiu06@gmail.com</a>
      </p>
    </StyledContact>
  );
}
