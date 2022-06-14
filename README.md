# Netlify URL
https://lucid-brattain-1c5ba7.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# The Solution

In the beggining I decided to use a form because I thought It was a great idea to show some skills with the submit manipulation and the bootstrap library. 
All of these wasn't a great approach because due to the first one, the way I managed the tiles was tremendusly slow and the bootstrap library ended up overlaping my abilities with HTML & CSS.

Now, what I made in the new tile game is:
  * Board: the board is a matrix of buttons, where each button represents a tile. If you click a tile you should see how the tile rotate to its corresponding position.
  * Verify button: this is a button where its purpose is to check if the pipe puzzle is completed, if the combination of tiles is wrong you will see a message.
  * Level: where you can chance the level of the puzzle. Until level 3 the matrix is having the proper space.


## Technical level
  * There is a file called, `src/hooks/useWebSocket.ts` where is used to manage the whole logic for the Websocket. I decided to use a custom hook because we might need to change/move the invocation of the Websocket.
  * After I received the tiles for the corresponding level I created the buttons from the tiles using some utility functions.
  * Then, inside the `<Board />` component I hydrate the buttons board from the previous step.
  * For the verify button and the level select I just call the Websocket with its corresponding message.

## Limitions
 * I had some issues with the width and the levels starting from the 4th.




