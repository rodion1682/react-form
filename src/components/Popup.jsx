import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Popup = ({ isOpen, onClose }) => {
	return (
		<div className={`popup ${isOpen ? 'popup--open' : ''}`}>
			<div className="popup__body">
				<div className="popup__content">
					<Link className="popup__close" onClick={onClose} to="/">
						Close
					</Link>
					<div className="popup__title">Value updated</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;

Popup.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
};
