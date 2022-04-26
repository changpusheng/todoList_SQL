module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    req.flash('warning_msg', '輸入帳號密碼')
    res.redirect('/users/login')
  }
}