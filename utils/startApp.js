// import modules here //

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  // Put all cards on the DOM on app load//
  // almost amazon reference: getBooks(user.uid).then((books) => showBooks(books)); //
};

export default startApp;
