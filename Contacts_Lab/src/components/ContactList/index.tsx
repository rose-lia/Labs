import { FC } from "react"
import { Contact } from "../../models/Contact"
import ContactCard from "../ContactCard"
import "./ContactList.css"

interface ContactListProps {
	contacts: Contact[]
	onDelete: (index: number) => void
	onUpdate: (index: number) => void
}

const ContactList: FC<ContactListProps> = ({
	contacts,
	onDelete,
	onUpdate,
}) => {
	const sortedContactsByLastName = contacts.sort((a, b) => {
		if (a.lastName > b.lastName) {
			return 1
		}
		if (a.lastName < b.lastName) {
			return -1
		}
		return 0
	})

	return (
		<div className="cards-container">
			{sortedContactsByLastName.map((contact, index) => (
				<ContactCard
					key={contact.lastName}
					contact={contact}
					onDelete={() => onDelete(index)}
					onUpdate={() => onUpdate(index)}
				/>
			))}
		</div>
	)
}

export default ContactList
