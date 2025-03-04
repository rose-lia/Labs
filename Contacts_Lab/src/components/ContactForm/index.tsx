import { FC, useState } from "react"
import "./ContactForm.css"
import { Contact } from "../../models/Contact"

interface ContactFormProps {
	onAdd: (contact: Contact) => void
}

const ContactForm: FC<ContactFormProps> = ({ onAdd }) => {
	const [firstName, setFirstName] = useState("")

	const [lastName, setLastName] = useState("")

	const [phoneNumber, setPhoneNumber] = useState<string>("")

	const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false)

	const [isFavorite, setIsFavorite] = useState(false)

	const resetInputs = () => {
		setFirstName("")
		setLastName("")
		setPhoneNumber("")
		setIsFavorite(false)
	}

	const isSubmitDisabled =
		!firstName || !lastName || !phoneNumber || phoneNumberError

	const handleSubmit = () => {
		onAdd({
			firstName,
			lastName,
			phoneNumber: +phoneNumber,
			isFavorite
		})
		resetInputs()
	}

	const handleKeyDown = (
		event: React.KeyboardEvent<HTMLInputElement>
	) => {
		if (!/[0-9]/.test(event.key) && event.key !== "Backspace") {
			event.preventDefault()
		}
	}

	return (
		<div className="form-wrapper">
			<div className="input-label-wrapper">
				<label
					className="input-label"
					htmlFor="firstName"
				>
					First Name:
				</label>
				<input
					className="input-box"
					type="text"
					id="firstName"
					name="firstName"
					value={firstName}
					onChange={(event) => {
						setFirstName(event.target.value)
					}}
				/>
			</div>
			<div className="input-label-wrapper">
				<label
					className="input-label"
					htmlFor="lastName"
				>
					Last Name:
				</label>
				<input
					className="input-box"
					type="text"
					id="lastName"
					name="lastName"
					value={lastName}
					onChange={(event) => {
						setLastName(event.target.value)
					}}
				/>
			</div>
			<div className="input-label-wrapper">
				<label
					className="input-label"
					htmlFor="phoneNumber"
				>
					Phone Number:
				</label>
				<input
					className="input-box"
					type="tel"
					id="phoneNumber"
					name="phoneNumber"
					minLength={10}
					maxLength={10}
					value={phoneNumber}
					onChange={(event) => {
						if (event.target.value.length < 10) {
							setPhoneNumberError(true)
						} else {
							setPhoneNumberError(false)
						}
						setPhoneNumber(event.target.value)
					}}
					onKeyDown={handleKeyDown}
				/>
			</div>

			{phoneNumberError && (
				<div className="phone-num-alert">
					Phone number must be 10 digits long!
				</div>
			)}

			<div className="check-btn">
				<div className="checkbox-align">
					<label
						className="checkbox"
						htmlFor="favorite"
					>
						Set As Favorite?
					</label>
					<input
						type="checkbox"
						id="favorite"
						name="favorite"
						checked={isFavorite}
						onChange={(event) => setIsFavorite(event.target.checked)}
					/>
				</div>
				<button
					disabled={isSubmitDisabled}
					className="submit-btn"
					onClick={handleSubmit}
				>
					Add Contact
				</button>
			</div>
		</div>
	)
}

export default ContactForm
