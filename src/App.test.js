import { render, screen, fireEvent } from '@testing-library/react';
import App from './components/App';
import Navigation from "./components/Navigation";

describe(App, ()=>{
  it("Testing Page Navigations", () => {
    const{getByRole}= render(<Navigation/>)
    const{getByText} = render(<App />)
    const dashboardLink = getByRole("a", {id: "dashBoard"} )
    fireEvent.click(dashboardLink)
    const page = getByText(page)
    expect(page).toEqual("dashBoard")

  })
})
