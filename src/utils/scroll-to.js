const scrollTo = (anchor, offset) => {
  document.getElementById(anchor).scrollIntoView(true);
  window.scrollBy(0, offset);
};

export default scrollTo;
