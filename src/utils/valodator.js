export function validator(data, config) {
	const errors = {};
	function validate(validateMethod, data, config) {
		switch (validateMethod) {
			case 'isRequird':
				if (data.trim() === '') return config.message;
				break;
			case 'isFourCharacters': {
				if (data.toString().length !== 4) return config.message;
				break;
			}
			case 'isThisYear': {
				let currentYear = new Date().getFullYear();
				if (Number(data) >= currentYear) return config.message;
				break;
			}

			case 'isLink': {
				const linkRegExp = /^https:\/\/.*\.com\/?$/;
				if (!linkRegExp.test(data)) return config.message;
				break;
			}

			default:
				break;
		}
	}
	for (const fieldName in data) {
		for (const validateMethod in config[fieldName]) {
			const error = validate(
				validateMethod,
				data[fieldName],
				config[fieldName][validateMethod]
			);
			if (error && !errors[fieldName]) {
				errors[fieldName] = error;
			}
		}
	}
	return errors;
}
