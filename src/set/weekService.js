import axios from 'axios'

import Config from '../config'
var serviceUrl=Config.serviceUrl
var obj = axios.get(serviceUrl + '/goods/list', {
	params: {
		page: 1,
		limit: 10
	}
});
export function weeklist() {
	return Request.get(serviceUrl + '/goods/list', {
		params: {
			page: 1,
			limit: 10
		}
	});
}

export default obj;