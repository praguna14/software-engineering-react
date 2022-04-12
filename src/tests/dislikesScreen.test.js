import Profile from "../components/profile/index"
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";

const MOCKED_USER = {username: "bob", _id: "234"};
const mockAxios = jest.genMockFromModule('axios')
mockAxios.create = jest.fn(() => mockAxios)

test('renders dislikes tab on profile', async() => {
    mockAxios.get.mockImplementation(() =>
        Promise.resolve({ data: MOCKED_USER }));
    
    render(
        <HashRouter>
            <Profile />
        </HashRouter>
    );

    const dislikeTab = screen.getByText(/Dislikes/i);
    expect(dislikeTab).toBeInTheDocument();
})