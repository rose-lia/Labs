import { FC, useState } from "react"
import { Contact } from "../../models/Contact"
import ContactList from "../ContactList"
import ContactForm from "../ContactForm"

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

	return (
		<>
			<ContactList contacts={contacts} />
            <ContactForm/>
			
		</>
	)
}

export default Home
