const getLogin=(req, res) => {
  res.render('auth/login', {pageTitle: 'Login',isLoggedIn:false});
}

const postLogin=(req, res) => {
  res.cookie('isLoggedIn', true);
  console.log(req.isLoggedIn);
  console.log(req.body);
  res.redirect('/');
}

module.exports={
  getLogin,
  postLogin
}
