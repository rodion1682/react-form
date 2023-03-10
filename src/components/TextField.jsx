import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, value, onChange, error }) => {
	return (
		<div className="form__item">
			<label className="form__label">{label}</label>
			<input
				className="form__input"
				type={type}
				name={name}
				value={value}
				onChange={onChange}
			/>
			{error && <span className="form__error">{error}</span>}
		</div>
	);
};

export default TextField;

TextField.defaultProps = {
	type: 'text',
};

TextField.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.string,
};
