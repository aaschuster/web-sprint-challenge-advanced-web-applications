// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.

import React from "react"
import { render, screen } from "@testing-library/react"
import Spinner from "./Spinner"

test('sanity', () => {
  expect(true).toBe(true)
})

test("renders with no errors with on as true", () => {
  render(<Spinner on={true}/>);
})

test("renders with no errors with on as false", () => {
  render(<Spinner on={false}/>);
})

test("expect Please wait... to not be in the document", () => {
  render(<Spinner on={false}/>);
  const pleaseWaitText = screen.queryByText(/Please wait.../i);
  expect(pleaseWaitText).not.toBeInTheDocument;
})