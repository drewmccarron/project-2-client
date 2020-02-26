'use strict'

const store = require('./../store')
const messageFunctions = require('./../message-functions')

const onSignUpSuccess = function (response) {
  messageFunctions.greenMessage(response.user.email + ' successfully signed up')

  $('.sign-in').trigger('reset')
  $('.sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  messageFunctions.redMessage('Failed to sign up')
}

const onSignInSuccess = function (response) {
  store.user = response.user

  $('.sign-in').trigger('reset')
  $('.sign-up').trigger('reset')

  messageFunctions.greenMessage(response.user.email + ' successfully signed in')

  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('.change-password').removeClass('hidden')
  $('.sign-out').removeClass('hidden')
  $('.create-loadout').removeClass('hidden')
  $('.index-loadouts').removeClass('hidden')
  $('.show-loadout').removeClass('hidden')
  $('.update-loadout').removeClass('hidden')
  $('.delete-loadout').removeClass('hidden')
  $('.character').removeClass('hidden')
}

const onSignInFailure = function (response) {
  messageFunctions.redMessage('Failed to sign in')
}

const onChangePasswordSuccess = function (response) {
  messageFunctions.greenMessage('You changed your password successfully')
  $('.change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  messageFunctions.redMessage('Failed to change password')
}

const onSignOutSuccess = function (response) {
  store.user = undefined
  messageFunctions.greenMessage('Signed out successfully')

  $('.change-password').trigger('reset')
  $('.create-loadout').trigger('reset')
  $('.update-loadout').trigger('reset')

  $('.sign-in').removeClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('.change-password').addClass('hidden')
  $('.sign-out').addClass('hidden')
  $('.create-loadout').addClass('hidden')
  $('.index-loadouts').addClass('hidden')
  $('.show-loadout').addClass('hidden')
  $('.update-loadout').addClass('hidden')
  $('.delete-loadout').addClass('hidden')
  $('.loadout-list').addClass('hidden')
  $('.character').addClass('hidden')
}

const onSignOutFailure = function (response) {
  messageFunctions.redMessage('Failed to sign out')
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
