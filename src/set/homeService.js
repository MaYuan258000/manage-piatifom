import axios from 'axios'

import Config from '../config'
var serviceUrl=Config.serviceUrl

var obj = axios.get(serviceUrl + '/goods/list', {
	params: {
		page: 1,
		limit: 10
	}
});

import Request from './baseService'
export function goodlist() {
	return Request.get(serviceUrl + '/goods/list', {
		params: {
			page: 1,
			limit: 10
		}
	});
}

export function templateFunction() {
	return Request.get(serviceUrl + '/goods/list', {
		page: 1,
		limit: 10
	})
}

export function loginn(userName, passWord) {
	return Request.post(serviceUrl + '/login/LoginByPhone', {
		phone: userName,
		password: passWord
	})
}
export default obj;