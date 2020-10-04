// database
const database = require("../../database");

// utils
const logger = require("../../utils/logger");

const getUser = (emailAddress, password) => {
	const getAuthUser = {
		userId: 'user123',
		firstname: 'First',
		lastname: 'Last',
		emailAddress
	};
	// TODO
	return getAuthUser;
};

const _getUser = async emailAddress => {
	try {
		const users = await database
			.select()
			.from("users")
			.where({
				emailAddress
			})
			.limit(1);

		const user = users[0];
		if (user) {
			delete user.createdAt;
			delete user.updatedAt;

			return user;
		}
		return null;
	} catch (err) {
		logger.log({
			level: "error",
			message: err
		});
	}
};

module.exports = getUser;
