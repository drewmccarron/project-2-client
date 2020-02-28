'use strict'

const store = require('./../store')
const messageFunctions = require('./../message-functions')
const showLoadoutsTemplate = require('../templates/loadout-listing.handlebars')

const onActionSuccess = function (response) {
  const showLoadoutsHtml = showLoadoutsTemplate({ loadouts: response.loadouts })
  $('.loadout-list').html(showLoadoutsHtml)
  $('.loadout-list').removeClass('hidden')
}

const onActionFailure = function (response) {
  messageFunctions.redMessage('Failed to index loadouts')
}

const onCreateLoadoutSuccess = function (response) {
  messageFunctions.greenMessage('You successfully created a loadout')
  $('.create-loadout').trigger('reset')
}

const onCreateLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to create loadout')
}

const onIndexLoadoutsSuccess = function (response) {
  if (response.loadouts.length > 0) {
    messageFunctions.greenMessage('Successfully retrieved loadouts')
    const showLoadoutsHtml = showLoadoutsTemplate({ loadouts: response.loadouts })
    $('.loadout-list').html(showLoadoutsHtml)
    $('.loadout-list').removeClass('hidden')
  } else {
    messageFunctions.redMessage('Unable to retrieve loadouts. Save one below')
  }
}

const onIndexLoadoutsFailure = function (response) {
  messageFunctions.redMessage('Failed to index loadouts')
}

const onUpdateLoadoutSuccess = function (response) {
  $('.update-loadout').trigger('reset')
  messageFunctions.greenMessage('Successfully updated loadout')
}

const onUpdateLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to update loadout')
}

const onDeleteLoadoutSuccess = function (response) {
  messageFunctions.greenMessage('Successfully deleted loadout')
}

const onDeleteLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to delete loadout')
}

const onShowLoadoutSuccess = function (response) {
  messageFunctions.greenMessage('Successfully equipped loadout')
  store.loadout = response.loadout
  $('#character_loadout_name').val(store.loadout.loadout_name)
  $('#character_loadout_armor').val(store.loadout.armor_slot)
  $('#character_loadout_weapon').val(store.loadout.weapon_slot)
  $('#character_loadout_trinket').val(store.loadout.trinket_slot)
}

const onShowLoadoutFailure = function (response) {
  messageFunctions.redMessage('Failed to show loadout')
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
  onShowLoadoutFailure,
  onActionSuccess,
  onActionFailure
}
