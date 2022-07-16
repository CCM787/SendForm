import { render, screen } from "@testing-library/react";
import Congratulation from "./Congratulation";



describe("Congratulation component", () =>{
  it("Congratulation renders", () => {
    render(<Congratulation />);
    expect(screen.getAllByText("Менеджер уже звонит, посмотрите на телефон")).toBeDefined();
  })
})
