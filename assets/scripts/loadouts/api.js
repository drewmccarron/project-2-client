'use strict'

const config = require('./../config')
const store = require('./../store')

const createLoadout = function (data) {
  return $.ajax({
    url: config.apiUrl + '/loadouts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const indexLoadouts = function (data) {
  return $.ajax({
    url: config.apiUrl + '/loadouts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateLoadout = function (data) {
  return $.ajax({
    url: config.apiUrl + '/loadouts/' + data.loadout.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createLoadout,
  indexLoadouts,
  updateLoadout
}
