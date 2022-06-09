import { render, screen } from "@testing-library/react";
import ResponsiveDrawer from "../components/ResponsiveDrawer";
import '@testing-library/jest-dom'

test('renders ResponsiveDrawer title', () => {
    render(<ResponsiveDrawer />)
    screen.debug(undefined, 300000)

    const appTitle = screen.getByText(/contributions manager/i);
    expect(appTitle).toBeInTheDocument();
    
});

test('renders the buttons on the menu ', () => {
    render(<ResponsiveDrawer />)

    const homeButton = screen.getByRole('button', {name: /home/i});
    expect(homeButton).toBeInTheDocument();

    const donateButton = screen.getByRole('button', {name: /donate/i});
    expect(donateButton).toBeInTheDocument();

    const newsButton = screen.getByRole('button', {name: /news/i});
    expect(newsButton).toBeInTheDocument();

    const campaignsButton = screen.getByRole('button', {name: /campaigns/i});
    expect(campaignsButton).toBeInTheDocument();

    const reportsButton = screen.getByRole('button', {name: /reports/i});
    expect(reportsButton).toBeInTheDocument();

    const myProfileButton = screen.getByRole('button', {name: /my profile/i});
    expect(myProfileButton).toBeInTheDocument();

    const notificationsButton = screen.getByRole('button', {name: /notifications/i});
    expect(notificationsButton).toBeInTheDocument();

    const myTaxRecordsButton = screen.getByRole('button', {name: /my tax records/i});
    expect(myTaxRecordsButton).toBeInTheDocument();

    const settingsButton = screen.getByRole('button', {name: /settings/i});
    expect(settingsButton).toBeInTheDocument();

    const logOutButton = screen.getByRole('button', {name: /log out/i});
    expect(logOutButton).toBeInTheDocument();
    
});

