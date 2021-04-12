const RenderPosition = {
  AFTER: `after`,
  AFTERBEGIN: `afterbegin`
};

const render = (container, child, place = RenderPosition.AFTERBEGIN) => {
  switch (place) {
    case RenderPosition.AFTER:
      container.after(child);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
  }
};

export {
  RenderPosition,
  render
};
