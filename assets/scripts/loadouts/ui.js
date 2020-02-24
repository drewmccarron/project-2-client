'use strict'

const store = require('./../store')

const onCreateLoadoutSuccess = function (response) {
  $('#message').text('You successfully created a loadout')
  console.log(response)
}

const onCreateLoadoutFailure = function (response) {
  $('#message').text('Failed to create loadout')
  console.log(response)
}

const onIndexLoadoutsSuccess = function (response) {
  $('#message').text('Successfully indexed your loadouts')
  console.log(response)
}

const onIndexLoadoutsFailure = function (response) {
  $('#message').text('Failed to index loadouts')
  console.log(response)
}

const onUpdateLoadoutSuccess = function (response) {
  $('#message').text('Successfully updated loadout')
  console.log(response)
}

const onUpdateLoadoutFailure = function (response) {
  $('#message').text('Failed to update loadout')
  console.log(response)
}

module.exports = {
  onCreateLoadoutSuccess,
  onCreateLoadoutFailure,
  onIndexLoadoutsSuccess,
  onIndexLoadoutsFailure,
  onUpdateLoadoutSuccess,
  onUpdateLoadoutFailure
}
