import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Button } from ".";

describe("<Button />", () => {
	it("should render the button with text 'Load more'", () => {
		render(<Button text="Load more" />);

		expect.assertions(1);

		expect(screen.getByRole("button", { name: /load more/i })).toBeInTheDocument();
	});

	it("should call function when click the button", () => {
		const fn = jest.fn();

		render(<Button text="Load more" onClick={fn} />);

		userEvent.click(screen.getByRole("button", { name: /load more/i }));

		expect(fn).toHaveBeenCalledTimes(1);
	});

	it("should be enabled when disabled is false", () => {
		render(<Button text="Load more" disabled={false} />);

		expect(screen.getByRole("button", { name: /load more/i })).toBeEnabled();
	});
});
