import { FC } from "react"
import { Contact } from "../../models/Contact"
import ContactCard from "../ContactCard"

interface ContactListProps {
	contacts: Contact[]
}

const ContactList: FC<ContactListProps> = ({ contacts }) => {
	return (
		<>
			{contacts.map((contact) => (
				<ContactCard
					key={contact.lastName}
					contact={contact}
				/>
			))}
		</>
	)
}

export default ContactList
