import { FC, useState } from "react"
import { Contact } from "../../models/Contact"
import ContactList from "../ContactList"
import ContactForm from "../ContactForm"
import "./Home.css"

const initialContactsState = [
	{
		firstName: "Bob",
		lastName: "Marley",
		phoneNumber: 5555555569,
		isFavorite: false,
	},
	{
		firstName: "Stevie",
		lastName: "Nicks",
		phoneNumber: 5554566868,
		isFavorite: true,
	},
	{
		firstName: "Tash",
		lastName: "Sultana",
		phoneNumber: 5554545453,
		isFavorite: true,
	},
]

const Home: FC = () => {
	const [contacts, setContacts] = useState<Contact[]>(
		initialContactsState
	)
	const handleAddContact = (contact: Contact) => {
		setContacts((c) => [...c, contact])
	}

	const handleDeleteContact = (index: number) => {
		const newContacts = [...contacts]
		newContacts.splice(index, 1)
		setContacts(newContacts)
	}

	const handleUpdateContact = (index: number) => {
		const newContacts = [...contacts]
		newContacts[index] = {
			...newContacts[index],
			isFavorite: !newContacts[index].isFavorite,
		}
		setContacts(newContacts)
	}

	return (
		<div className="form-list-container">
			<ContactForm onAdd={handleAddContact} />
			<ContactList
				contacts={contacts}
				onDelete={handleDeleteContact}
				onUpdate={handleUpdateContact}
			/>
		</div>
	)
}

export default Home
