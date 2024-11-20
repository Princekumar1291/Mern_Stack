const getLogin=(req, res) => {
  res.render('auth/login', {pageTitle: 'Login',isLoggedIn:false});
}

const postLogin=(req, res) => {
  req.session.isLoggedIn = true;
  res.redirect('/');
}

const postLogout=(req, res) => {
  req.session.destroy();
  res.redirect('/');
}

module.exports={
  getLogin,
  postLogin,
  postLogout
}
