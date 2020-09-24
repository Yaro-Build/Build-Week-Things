import React from "react";
import Profile from "../Profile";
import { render, screen } from "@testing-library/react";


const Test = 
      {
	  Name: "Test Name",
	  image: "Test Image",
	  Joining_date: "January 1st, 2020",
	  Location: "Test location",
	  Role: "Software something",
	  Bio: "Owns a Ferrari"	
      }


describe("Profile descriptions - name", () => {
  it("it should render the Tech Associates name", () => {
      render(<Profile profile={Test} />);
    const name = screen.getByText("Test Name", { selector: "h1.prof_name" });
    expect(name).toBeInTheDocument();
  });
  it("it should render the Tech Associates role", () => {
    render(<Profile  profile={Test} />);
    const role = screen.getByText("Software something", { selector: "h5.prof_role" });
    expect(role).toBeInTheDocument();
  });
  it("it should render the Tech Associates location", () => {
    render(<Profile profile={Test} />);
    const location = screen.getByText("Test location", { selector: "h5.prof_location" });
    expect(location).toBeInTheDocument();
  });
  it("it should render the Tech Associates joining date", () => {
    render(<Profile  profile={Test} />);
    const date = screen.getByText("Joining Date: January 1st, 2020", { selector: "p.prof_date" });
    expect(date).toBeInTheDocument();
  });
  it("it should render the Tech Associates Bio", () => {
    render(<Profile  profile={Test} />);
    const Bio = screen.getByText("Owns a Ferrari", { selector: "p.prof_bio" });
    expect(Bio).toBeInTheDocument();
  });
});
