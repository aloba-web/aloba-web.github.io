import React from "react";
import { render } from "@testing-library/react";
import PageWrapper from "./PageWrapper";

test("renders learn react link", () => {
  render(<PageWrapper>Child</PageWrapper>);
});
