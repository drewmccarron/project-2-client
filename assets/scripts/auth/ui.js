'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up')
}

const onSignUpFailure = function (response) {
  $('#message').text('Failed to sign up')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text(response.user.email + ' successfully signed in')
}

const onSignInFailure = function (response) {
  $('#message').text('Failed to sign in')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('You changed your password successfully')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('Failed to change password')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Signed out successfully')
}

const onSignOutFailure = function (response) {
  $('#message').text('Failed to sign out')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
