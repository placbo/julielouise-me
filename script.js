var confettiSettings = {
  target: "confetti-holder",
  max: "80",
  size: "2",
  animate: true,
  props: ["circle", "square", "triangle", "line"],
  colors: [
    [165, 104, 246],
    [230, 61, 135],
    [0, 199, 228],
    [253, 214, 126],
  ],
  clock: "25",
  rotate: true,
  width: "1364",
  height: "810",
  start_from_edge: false,
  respawn: true,
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
