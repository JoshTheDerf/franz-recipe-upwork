module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const count = [...document.querySelectorAll('span.mentions')]
      .reduce((acc, el) => acc += parseInt(el.textContent) || 0, 0)

    Franz.setBadge(count);
  };

  // Check for new messages every second and update Franz badge.
  Franz.loop(getMessages);
};
