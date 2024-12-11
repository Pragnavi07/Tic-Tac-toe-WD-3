# Tic-Tac-Toe with AI

A simple **Tic-Tac-Toe** game where you can play against an AI opponent or with another player. The AI uses a basic strategy to make moves, blocking the player and attempting to win. The game is built using **HTML**, **CSS**, and **JavaScript** with a clean, responsive user interface powered by **Bootstrap**.

## Features

- **Play Against AI**: Play against a computer opponent with basic AI logic.
- **Two-Player Mode**: Option to play with another person.
- **Responsive Design**: Fully responsive layout for all screen sizes using **Bootstrap**.
- **Reset Game**: A button to reset the game state.
- **Game Status**: Displays whose turn it is, or announces the winner or draw.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Pragnavi07/tic-tac-toe-ai.git
    ```

2. Open the `index.html` file in your browser.

Alternatively, you can host it on any static file hosting service like GitHub Pages.

## Usage

- The game starts with Player X. Click on the grid to take turns.
- The AI will block your moves and try to win.
- The game will announce the winner, or declare a draw if the grid is filled without a winner.
- Click the **Reset Game** button to restart the game.

## Technologies Used

- **HTML**: For structuring the webpage.
- **CSS**: For styling the page and responsive layout.
- **JavaScript**: For game logic, including AI moves.
- **Bootstrap**: For responsive design.

## AI Logic

The AI is implemented using a basic **Minimax** algorithm:
- It blocks the player's winning moves.
- It looks for a winning move when possible.
- If no optimal move is found, it makes a random move.

## Screenshots

![Game Screenshot](path/to/screenshot.jpg)

## Contributing

Feel free to fork the repository and submit pull requests. For suggestions or issues, please open an issue in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).
