import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';

const FormBody = ({ data, errors, onChange }) => {
	return (
		<>
			<TextField
				label="Name"
				name="name"
				value={data.name}
				onChange={onChange}
				error={errors.name}
			/>
			<TextField
				label="Surname"
				name="surname"
				value={data.surname}
				onChange={onChange}
				error={errors.surname}
			/>
			<TextField
				label="Date of Birth"
				type="number"
				name="date"
				value={data.date}
				onChange={onChange}
				error={errors.date}
			/>
			<TextField
				label="Portfolio"
				name="portfolio"
				value={data.portfolio}
				onChange={onChange}
				error={errors.portfolio}
			/>
		</>
	);
};

export default FormBody;

FormBody.propTypes = {
	data: PropTypes.object,
	errors: PropTypes.object,
	onChange: PropTypes.func,
};
