const core = require('@actions/core');
const axios = require('axios').default;

try {
	username = core.getInput('username');
	password = core.getInput('password');

	axios.post('https://hub.docker.com/v2/users/login', {
		username: username,
		password: password
	}).then(function(response) {
		bearer_token = response.data.token;
	
		uuid = core.getInput('uuid');
	
		axios.delete('https://hub.docker.com/v2/access-tokens/' + uuid, {
			headers: {
				'Authorization': 'Bearer ' + bearer_token
			}
		});
	});
}
catch (error) {
	core.setFailed(error.message);
}