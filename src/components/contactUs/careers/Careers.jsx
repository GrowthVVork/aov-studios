import * as React from "react";
import { CareersContent, CareersWrapper } from "./Careers.styles";

export const Careers = () => {
  return (
    <CareersWrapper>
      <CareersContent
        style={{ color: "#767676", fontSize: "1.8rem", fontWeight: "bold" }}
      >
        Careers
      </CareersContent>
      <CareersContent>WE ARE HIRIING!!</CareersContent>
      <CareersContent>
        We are looking for fresh graduates as well as experienced professionals.
        Interested candidates should submit a cover letter and resume at
        studiosaov@gmail.com
      </CareersContent>
    </CareersWrapper>
  );
};
