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

const deleteLoadout = function (idNumber) {
  return $.ajax({
    url: config.apiUrl + '/loadouts/' + idNumber,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showLoadout = function (data) {
  return $.ajax({
    url: config.apiUrl + '/loadouts/' + data.loadout.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createLoadout,
  indexLoadouts,
  updateLoadout,
  deleteLoadout,
  showLoadout
}
