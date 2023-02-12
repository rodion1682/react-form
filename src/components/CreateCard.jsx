import React, { useEffect, useState } from 'react';
import Popup from './Popup';
import { validator } from '../utils/valodator';
import { useHistory } from 'react-router-dom';
import FormBody from './FormBody';

const CreateCard = () => {
	let url = window.location.pathname;
	const [data, setData] = useState({
		name: '',
		surname: '',
		date: '',
		portfolio: '',
	});
	const [isPopupOpen, setPopupOpen] = useState(false);

	const [errors, setErorrs] = useState({});
	const validatorConfig = {
		name: { isRequird: { message: 'Name is required to fill' } },
		surname: { isRequird: { message: 'Surname is required to fill' } },
		date: {
			isRequird: { message: 'Birth date is required to fill' },
			isFourCharacters: { message: 'Birth year must be four characters' },
			isThisYear: { message: 'Your birth year is incorrect' },
		},
		portfolio: {
			isRequird: { message: 'Prortfolio is required to fill' },
			isLink: { message: 'Prortfolio must be a link: https://text.com' },
		},
	};

	const validate = () => {
		const errors = validator(data, validatorConfig);
		setErorrs(errors);
		return Object.keys(errors).length === 0;
	};

	useEffect(() => {
		validate();
	}, [data]);

	const handeChange = ({ target }) => {
		setData((prevState) => ({
			...prevState,
			[target.name]: target.value,
		}));
	};
	const handeSubmit = (e) => {
		e.preventDefault();
		const isValid = validate();
		if (isValid) {
			console.log(data);
			setPopupOpen(true);
			localStorage.setItem('studentData', JSON.stringify(data));
		} else {
			return;
		}
	};

	const handleClosePopup = () => {
		setPopupOpen(false);
	};

	useEffect(() => {
		if (url === '/CreateCard/edit') {
			let studentData = localStorage.getItem('studentData');
			studentData = JSON.parse(studentData);
			setData(studentData);
		}
	}, []);

	const handleSave = () => {
		history.push('/');
	};
	const history = useHistory();
	console.log(data);

	if (url === '/CreateCard') {
		return (
			<div className="form">
				<h1 className="form__title">Create</h1>
				<form className="form_body" onSubmit={handeSubmit}>
					<FormBody data={data} errors={errors} onChange={handeChange} />
					<button className="form__btn">Create</button>
				</form>
				<Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
			</div>
		);
	} else if (url === '/CreateCard/edit') {
		return (
			<div className="form">
				<h1 className="form__title">Edit</h1>
				<form className="form_body" onSubmit={handeSubmit}>
					<FormBody data={data} errors={errors} onChange={handeChange} />
					<button
						className="form__btn form__btn--gery"
						type="button"
						onClick={() => {
							handleSave();
						}}
					>
						Back
					</button>
					<button className="form__btn" type="submit">
						Update
					</button>
				</form>
				<Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
			</div>
		);
	}
};

export default CreateCard;
