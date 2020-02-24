'use strict'

const authEvents = require('./auth/events')
const loadoutEvents = require('./loadouts/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
})

$(() => {
  $('#create-loadout').on('submit', loadoutEvents.onCreateLoadout)
  $('#index-loadouts').on('submit', loadoutEvents.onIndexLoadouts)
  $('#show-loadout').on('submit', loadoutEvents.onShowLoadout)
  $('#update-loadout').on('submit', loadoutEvents.onUpdateLoadout)
  $('#loadout-list').on('click', '.delete-loadout', loadoutEvents.onDeleteLoadout)
})
