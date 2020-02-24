'use strict'

const greenMessage = function (messageText) {
  $('#message').removeClass('alert alert-secondary')
  $('#message').removeClass('alert alert-danger')
  $('#message').addClass('alert alert-success')
  $('#message').text(messageText)
}
const redMessage = function (messageText) {
  $('#message').removeClass('alert alert-secondary')
  $('#message').removeClass('alert alert-success')
  $('#message').addClass('alert alert-danger')
  $('#message').text(messageText)
}

const greyMessage = function (messageText) {
  $('#message').removeClass('alert alert-danger')
  $('#message').removeClass('alert alert-success')
  $('#message').addClass('alert alert-secondary')
  $('#message').text(messageText)
}

module.exports = {
  greenMessage,
  redMessage,
  greyMessage
}
