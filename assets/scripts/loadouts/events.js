'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const store = require('./../store')
const api = require('./api')
const ui = require('./ui')

const onCreateLoadout = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.createLoadout(data)
    .then(ui.onCreateLoadoutSuccess)
    .then(() => onAction(event))
    .catch(ui.onCreateLoadoutFailure)
}

const onIndexLoadouts = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.indexLoadouts(data)
    .then(ui.onIndexLoadoutsSuccess)
    .catch(ui.onIndexLoadoutsFailure)
}

const onAction = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.indexLoadouts(data)
    .then(ui.onActionSuccess)
    .catch(ui.onActionFailure)
}

const onUpdateLoadout = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  if (store.loadout === undefined) {
    ui.onUpdateLoadoutFailure()
  } else {
    api.updateLoadout(data)
      .then(ui.onUpdateLoadoutSuccess)
      .then(() => onAction(event))
      .catch(ui.onUpdateLoadoutFailure)
  }
}

const onDeleteLoadout = function (event) {
  event.preventDefault()
  const loadoutId = $(event.target).closest('div').data('id')

  api.deleteLoadout(loadoutId)
    .then(ui.onDeleteLoadoutSuccess)
    .then(() => onAction(event))
    .catch(ui.onDeleteLoadoutFailure)
}

const onShowLoadout = function (event) {
  event.preventDefault()
  const loadoutId = $(event.target).closest('div').data('id')

  api.showLoadout(loadoutId)
    .then(ui.onShowLoadoutSuccess)
    .then(() => onAction(event))
    .catch(ui.onShowLoadoutFailure)
}

module.exports = {
  onCreateLoadout,
  onIndexLoadouts,
  onUpdateLoadout,
  onDeleteLoadout,
  onShowLoadout
}
