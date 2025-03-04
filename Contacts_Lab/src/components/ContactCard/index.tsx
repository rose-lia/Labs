import { FC } from "react"
import { Contact } from "../../models/Contact"
import "./ContactCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons"
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons"

interface ContactCardProps {
	contact: Contact
	onDelete: () => void
	onUpdate: () => void
}

const ContactCard: FC<ContactCardProps> = ({
	contact,
	onDelete,
	onUpdate,
}) => {
	const { firstName, lastName, phoneNumber, isFavorite } = contact

	const formatPhoneNumber = (phoneNumber: number) => {
		const dashedPhoneNum = String(phoneNumber)

		if (dashedPhoneNum.length <= 3) {
			return dashedPhoneNum
		} else if (dashedPhoneNum.length <= 6) {
			return `${dashedPhoneNum.slice(0, 3)}-${dashedPhoneNum.slice(
				3
			)}`
		} else {
			return `${dashedPhoneNum.slice(0, 3)}-${dashedPhoneNum.slice(
				3,
				6
			)}-${dashedPhoneNum.slice(6, 10)}`
		}
	}

	return (
		<div className="contact-card-wrapper">
			<div className="contact-card">
				<div className="contact-name">
					{firstName} {lastName}
				</div>
				<div className="contact-num-icons">
					<div className="phone-num">
						{formatPhoneNumber(phoneNumber)}
					</div>
					<div className="icons">
						<div>
							{isFavorite ? (
								<FontAwesomeIcon
									color="#e36940"
									icon={faHeart}
									onClick={onUpdate}
								/>
							) : (
								<FontAwesomeIcon
									color="#5a7d7c"
									icon={faHeartOutline}
									onClick={onUpdate}
								/>
							)}
						</div>

						<FontAwesomeIcon
							color="#5a7d7c"
							icon={faTrash}
							onClick={onDelete}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactCard
