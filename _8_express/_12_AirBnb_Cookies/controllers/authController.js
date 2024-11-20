const getLogin=(req, res) => {
  res.render('auth/login', {pageTitle: 'Login',isLoggedIn:false});
}

const postLogin=(req, res) => {
  res.cookie('isLoggedIn', true);
  res.redirect('/');
}

const postLogout=(req, res) => {
  res.cookie('isLoggedIn', false);
  res.redirect('/');
}

module.exports={
  getLogin,
  postLogin,
  postLogout
}
