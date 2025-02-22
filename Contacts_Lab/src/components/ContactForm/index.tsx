const ContactForm = () => {
	return (
		<div>
			<label htmlFor="firstName">First Name:</label>
			<input
				type="text"
				id="firstName"
				name="firstName"
			/>
			<label htmlFor="lastName">Last Name:</label>
			<input
				type="text"
				id="lastName"
				name="lastName"
			/>
			<label htmlFor="phoneNumber">Phone Number:</label>
			<input
				type="tel"
				id="phoneNumber"
				name="phoneNumber"
				placeholder="0000000000"
				minLength={10}
				maxLength={10}
			/>
			<label htmlFor="favorite">Is a Favorite?:</label>
			<input
				type="checkbox"
				id="favorite"
				name="favorite"
			/>
			<button>Submit</button>
		</div>
	)
}

export default ContactForm
