import request from '@/utils/request'

const BASE_URL = "http://localhost:8888"

export function receive(data) {
  return request({
    url: BASE_URL + '/financial/receive',
    method: 'post',
    data: data
  })
}

export function sendBack(data) {
  return request({
    url: BASE_URL + '/financial/sendBack',
    method: 'post',
    data: data
  })
}

export function getDetails(data) {
  return request({
    url: BASE_URL + '/financial/getDetails',
    method: 'post',
    data: data
  })
}

export function getUnitDetails(data) {
  return request({
    url: BASE_URL + '/financial/getUnitDetails',
    method: 'post',
    data: data
  })
}

export function setResult(data) {
  return request({
    url: BASE_URL + '/financial/setResult',
    method: 'post',
    data: data
  })
}

export function pass(data) {
  return request({
    url: BASE_URL + '/financial/pass',
    method: 'post',
    data: data
  })
}

export function unPass(data) {
  return request({
    url: BASE_URL + '/financial/unPass',
    method: 'post',
    data: data
  })
}
