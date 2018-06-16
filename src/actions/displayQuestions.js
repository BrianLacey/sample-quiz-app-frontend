export const toggleDisplayQuestions = () => ({
  type: "TOGGLE_DISPLAY_QUESTIONS"
});// When dispatched by a connected component's function, matches the case in the reducer that will invert the boolean value.

export const displayQuestionsFalse = boolean => ({
  type: "DISPLAY_QUESTIONS_VALUE",
  boolean
});// When dipatched by a connected component's function, matches the reducer case that sets the boolean to a specific value.
