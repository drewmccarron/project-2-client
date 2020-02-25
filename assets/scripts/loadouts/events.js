'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateLoadout = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.createLoadout(data)
    .then(() => onIndexLoadouts(event))
    .catch(ui.onCreateLoadoutFailure)
}

const onIndexLoadouts = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.indexLoadouts(data)
    .then(ui.onIndexLoadoutsSuccess)
    .catch(ui.onIndexLoadoutsFailure)
}

const onUpdateLoadout = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.updateLoadout(data)
    .then(() => onIndexLoadouts(event))
    .catch(ui.onUpdateLoadoutFailure)
}

const onDeleteLoadout = function (event) {
  event.preventDefault()
  const loadoutId = $(event.target).closest('section').data('id')
  console.log(loadoutId)

  api.deleteLoadout(loadoutId)
    .then(() => onIndexLoadouts(event))
    .catch(ui.onDeleteLoadoutFailure)
}

const onShowLoadout = function (event) {
  event.preventDefault()
  const loadoutId = $(event.target).closest('section').data('id')
  console.log(loadoutId)

  api.showLoadout(loadoutId)
    .then(ui.onShowLoadoutSuccess)
    .catch(ui.onShowLoadoutFailure)
}

module.exports = {
  onCreateLoadout,
  onIndexLoadouts,
  onUpdateLoadout,
  onDeleteLoadout,
  onShowLoadout
}
