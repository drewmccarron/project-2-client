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
    .then(ui.onCreateLoadoutSuccess)
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
    .then(ui.onUpdateLoadoutSuccess)
    .catch(ui.onUpdateLoadoutFailure)
}

const onDeleteLoadout = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.deleteLoadout(data)
    .then(ui.onDeleteLoadoutSuccess)
    .catch(ui.onDeleteLoadoutFailure)
}

module.exports = {
  onCreateLoadout,
  onIndexLoadouts,
  onUpdateLoadout,
  onDeleteLoadout
}