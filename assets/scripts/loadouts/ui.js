'use strict'

const store = require('./../store')
const messageFunctions = require('./../message-functions')
const showLoadoutsTemplate = require('../templates/loadout-listing.handlebars')

const onCreateLoadoutSuccess = function (response) {
  messageFunctions.greenMessage('You successfully created a loadout')
  console.log(response)
}

const onCreateLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to create loadout')
  console.log(response)
}

const onIndexLoadoutsSuccess = function (response) {
  messageFunctions.greenMessage('Successfully indexed your loadouts')
  console.log(response)
  const showLoadoutsHtml = showLoadoutsTemplate({ loadouts: response.loadouts })
  $('.loadout-list').html(showLoadoutsHtml)
}

const onIndexLoadoutsFailure = function (response) {
  messageFunctions.redMessage('Failed to index loadouts')
  console.log(response)
}

const onUpdateLoadoutSuccess = function (response) {
  messageFunctions.greenMessage('Successfully updated loadout')
  console.log(response)
}

const onUpdateLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to update loadout')
  console.log(response)
}

const onDeleteLoadoutSuccess = function (response) {
  messageFunctions.greenMessage('Successfully deleted loadout')
  console.log(response)
}

const onDeleteLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to delete loadout')
  console.log(response)
}

const onShowLoadoutSuccess = function (response) {
  messageFunctions.greenMessage('Successfully showed loadout')
  store.loadout = response.loadout
  console.log(response)
  $('#character_loadout_name').val(store.loadout.loadout_name)
  $('#character_loadout_armor').val(store.loadout.armor_slot)
  $('#character_loadout_weapon').val(store.loadout.weapon_slot)
  $('#character_loadout_trinket').val(store.loadout.trinket_slot)
}

const onShowLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to show loadout')
  console.log(response)
}

module.exports = {
  onCreateLoadoutSuccess,
  onCreateLoadoutFailure,
  onIndexLoadoutsSuccess,
  onIndexLoadoutsFailure,
  onUpdateLoadoutSuccess,
  onUpdateLoadoutFailure,
  onDeleteLoadoutSuccess,
  onDeleteLoadoutFailure,
  onShowLoadoutSuccess,
  onShowLoadoutFailure
}
