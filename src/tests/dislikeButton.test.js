/**
 * @file Implement unit tests for dislike button.
 */
import TuitStats from "../components/tuits/tuit-stats";
import { screen, render, fireEvent } from "@testing-library/react";
import { HashRouter } from "react-router-dom";


const MOCKED_TUIT =
    { tuit: "some randomn text", postBy: "111", _id: "1111", stats: { likes: 22, dislikes: 14 } };

let likeTuitFunctionMock = jest.fn();
let dislikeTuitFunctionMock = jest.fn();

test('dislike button renders properly', async () => {
    render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitFunctionMock} dislikeTuit={dislikeTuitFunctionMock} />
        </HashRouter>
    );

    const dislikeButton = screen.getByTestId('dislikeButton');
    expect(dislikeButton).toBeInTheDocument();
})

test('dislike stats present on the tuit', async () => {

    render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitFunctionMock} dislikeTuit={dislikeTuitFunctionMock} />
        </HashRouter>
    );

    const dislikeStat = screen.getByText(/14/i);
    expect(dislikeStat).toBeInTheDocument();
})

test('dislike function called on click', async () => {
    render(
        <HashRouter>
            <TuitStats tuit={MOCKED_TUIT} likeTuit={likeTuitFunctionMock} dislikeTuit={dislikeTuitFunctionMock} />
        </HashRouter>
    );

    const dislikeButton = screen.getByTestId('dislikeButton');
    fireEvent.click(dislikeButton);
    expect(dislikeTuitFunctionMock).toHaveBeenCalledTimes(1);
})