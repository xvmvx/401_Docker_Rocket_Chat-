import { API } from '../api';
// import { getServerInfo } from '../lib/getServerInfo';

API.fwork.addRoute('healthz', { authRequired: false }, {
	get() {
		return {};
	},
});

API.default.addRoute('info', { authRequired: false }, {
	get() {
		// const user = this.getLoggedInUser();
		return {};
		// return API.v1.success(Promise.await(getServerInfo(user?._id)));
	},
});

API.default.addRoute('ecdh_proxy/initEncryptedSession', { authRequired: false }, {
	post() {
		return {};
		// return {
		// 	statusCode: 200,
		// 	body: {
		// 		success: false,
		// 		error: 'Not Acceptable',
		// 	},
		// };
	},
});
