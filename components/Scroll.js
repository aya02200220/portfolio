export const smoothScroll = (targetID) => {
  const target = document.getElementById(targetID);
  if (!target) return;

  const headerOffset = 90;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let startTime = null;

  const animation = (currentTime) => {
    if (!startTime) startTime = currentTime;
    const elapsedTime = currentTime - startTime;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const run = ease(elapsedTime, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (elapsedTime < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
