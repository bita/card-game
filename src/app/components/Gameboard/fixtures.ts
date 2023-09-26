export const winPhrases = [
  "Congratulations!",
  "Well done!",
  "Bravo!",
  "Outstanding!",
  "Excellent!",
  "Impressive!",
  "Kudos to you!",
  "Way to go!",
  "That's fantastic!",
  "You nailed it!",
  "Remarkable job!",
  "You aced it!",
  "Superb work!",
  "You're a star!",
  "Exceptional effort!",
  "You're on fire!",
  "Incredible work!",
  "Hats off to you!",
  "Terrific job!",
  "You're crushing it!",
  "Stellar performance!",
];

export const losePhrases = [
  "Better luck next time!",
  "Don't give up!",
  "You'll get them next time!",
  "Keep trying!",
  "It's just a setback!",
  "Stay determined!",
  "Failure is a part of learning!",
  "You're on the path to improvement!",
  "You can bounce back!",
  "Never stop trying!",
  "Keep your chin up!",
  "Mistakes happen, learn from them!",
  "You're getting closer to success!",
  "Keep pushing forward!",
  "The journey to victory is filled with challenges!",
  "You're still a winner in our book!",
  "Keep your spirits high!",
  "You're building resilience!",
  "Every setback is a setup for a comeback!",
  "Your effort is admirable!",
];

export const WIN_STATUS = "WIN";
export const LOSE_STATUS = "LOSE";

export const TIMER_STATUS = { STARTED: "started", RESET: "reset" };

export const themeNameValue = [
  { value: "dramatic sky", name: "Sky" },
  { value: "underwater", name: "Under Water" },
  { value: "desert", name: "Desert" },
  { value: "modern art", name: "Art" },
  { value: "puppy", name: "Dogs" },
];

export const BUTTONS = {
    GAME_SETTINGS: "Game Settings",
    NEW_PHOTOS: "New Photos",
    RESET_GAME: "Reset Game",
    SCORES: "Scores",
    PLAY_AGIAN: "Play again!",
    SAVE: "Save",
}

export const MSGS = {
    GAME_FINISHED: "You have finished the Game!",
    GAME_NOT_FINISHED: "You did NOT finished the Game fast enough",
    YOU_WIN: "YOU WIN!",
    YOU_LOSE: "YOU LOSE!",
    NO_SCORES_AVAILABLE: "No scores availble."
}
export const SCORES_PROPERTIES = {
  SCORES: "scores",
  MOVES: "moves",
  TIME: "time",
  STATUS: "status",
  THEME: "theme",
  LEVEL: "level",
}
export const GENERAL = {
  GAME_TITLE: "Pair Player",
  GAME_SUB_TITLE: "The Memory Match Quest",
  GAME_RULE: "Complete the Game before time's up!",
  MOVES: "Moves",
  TIME: "Time",
  STATUS: "Status",
  LAST_SCORE: "Last Score",
  LEVEL: "Level",
  THEME: "Theme",
  GAME_SETTINGS: "Game Settings",
  TIME_SPENT: "Time spent",
  YOUR_MOVES: "Your moves",
  DIFFICULTY_LEVEL: "Difficulty Level",
  SCORE_BOARD: "Score Borad",
};

export const LEVELS = [
    {value: 2, name: "Easy"},
    {value:4, name: "Medium"},
    {value:6, name: "Hard"}
]

export const CARDS_DATA_REDUCERS_TYPES = {
    START_NEW_GAME: "START_NEW_GAME",
    FLIPP_CARD: "FLIPP_CARD",
    MATCHED_CARDS: "HANDLER_MATCHED_CARDS",
    NOT_MATCHED_CARDS: "HANDLER_NOT_MATCHED_CARDS",
}

export const CARD_STATE = {
    FLIPPED: "flipped",
    MATCHED: "matched",
    UNMATCH: "unmatch",
}