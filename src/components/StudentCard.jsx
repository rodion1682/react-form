import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from '../style.scss';

const StudentCard = () => {
	const [submittedData, setSubmittedData] = useState(null);
	useEffect(() => {
		const data = localStorage.getItem('studentData');
		setSubmittedData(JSON.parse(data));
	}, []);
	console.log(submittedData);
	let birthYear = 0;
	if (submittedData) {
		birthYear = new Date().getFullYear() - Number(submittedData.date);
	}

	return (
		<div className="student">
			<h1 className="student__title">Student Card</h1>
			{submittedData ? (
				<>
					<div className="student__items">
						<div className="student__item">
							<div className="student__label">Name:</div>
							<div className="student__value">{submittedData.name}</div>
						</div>
						<div className="student__item">
							<div className="student__label">Surname:</div>
							<div className="student__value">
								{submittedData.surname}
							</div>
						</div>
						<div className="student__item">
							<div className="student__label">Date of Birth:</div>
							<div className="student__value">
								{submittedData.date} ({birthYear} years)
							</div>
						</div>
						<div className="student__item">
							<div className="student__label">Portfolio:</div>
							<div className="student__value">
								<a href="#">{submittedData.portfolio}</a>
							</div>
						</div>
					</div>
					<Link className="student__btn" to="/CreateCard/edit">
						Edit
					</Link>
				</>
			) : (
				<>
					<div className="student__data">No data</div>
					<Link className="student__btn" to="/CreateCard">
						Add
					</Link>
				</>
			)}
		</div>
	);
};

export default StudentCard;
