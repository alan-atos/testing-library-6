import { render, screen } from "@testing-library/react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import '@testing-library/jest-dom'

test('renders ResponsiveDrawer title', () => {
    render(<ResponsiveDrawer />)

    const appTitle = screen.getByText(/contributions manager/i);
    expect(appTitle).toBeInTheDocument();
    
});

