// modules
const bcrypt = require("bcryptjs");

exports.hashPassword = password => {
	if (password) {
		const bcryptSaltRounds = 10;
		const bcryptSalt = bcrypt.genSaltSync(bcryptSaltRounds);
		const hashPassword = bcrypt.hashSync(password, bcryptSalt);

		return hashPassword;
	}
	return undefined;
};

exports._validatePassword = async (password, hash) => {
	if (password) {
		if (hash) {
			const result = await bcrypt.compare(password, hash);
			return result;
		}
		return undefined;
	}
	return undefined;
};

exports.validatePassword = (providedPassword, correctPasswordHash) => {
	// TODO
	return true;
};
