# Pair Player: The Memory Match Quest

Welcome to the Match Card Game! This is a React Next.js application with Tailwind CSS for styling. The game has been enhanced with additional features and now incorporates an API call to Unsplash for dynamic photo changes, offers multiple difficulty levels, and utilizes Redux for state management.

## Overview

The Match Card Game is a classic memory game where players need to match pairs of cards by flipping them over two at a time.

## Features

- Interactive card flipping.
- Responsive design with Tailwind CSS.
- Dynamic photo changes from Unsplash.
- Multiple difficulty levels.
- State management with Redux.
- **Timer Feature:**
  - The game now includes a timer that tracks the time taken to complete the game.
  - The progress bar's speed is adjusted based on the selected difficulty level, making the game more challenging.
  - Players must complete the game within the time limit to win; otherwise, they lose.

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS
- Redux
- Unsplash API

## Getting Started

Follow these steps to run the project locally:

1. Clone the repository:
   `git clone https://github.com/bita/match-card-game.git`

2. Navigate to the project directory:
   `cd card-game`

3. Install dependencies:
   `npm install`

4. Create an Unsplash API Access Key:
   -Visit [Unsplash Developer](https://unsplash.com/developers) and sign up for a free developer account.
   -Create a new application to obtain an access key. The free tier has limitations of 30 pictures per request and 500 requests per hour.

5. Configure your API Access Key:
   -Create a `.env` file in the root directory of your project.
   -Add your Unsplash API Access Key to the `.env` file like this:
   `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your-access-key-here`

6. Start the development server:
   `npm run dev`

The game should now be accessible at http://localhost:3000.

![Alt text](public/images/screenshot.png)

## Usage

To play the game, click on cards to flip them over. Try to match pairs of identical cards by remembering their positions. The game ends when all pairs are matched or when the timer runs out.

## Testing

The Match Card Game includes end-to-end (E2E) tests using Cypress to ensure the functionality of the game. You can run these tests locally with the following steps:

1. Make sure the development server is running:
   `npm run dev`

2. Open a new terminal window and navigate to the project directory:
   `cd card-game`

3. Run the Cypress E2E tests:
   `npx cypress open`

This will open the Cypress Test Runner, where you can select and run the E2E tests.

## Roadmap

I have plans to enhance the game in the following ways:

- Adding a score panel to track and display player scores.
- Adding sound effects.
- Allowing customization of card sets.

Author

Bita Jalili
Email: bita.djalili@gmail.com
