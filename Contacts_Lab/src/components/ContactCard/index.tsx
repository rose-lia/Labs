import { FC } from "react"
import { Contact } from "../../models/Contact"

interface ContactCardProps {
	contact: Contact
}

const ContactCard: FC<ContactCardProps> = ({contact}) => {

    const { firstName, lastName, phoneNumber, isFavorite } = contact

	return (
    <div>
        <div>
            {firstName} {lastName}
        </div>
        <div>
            {phoneNumber}
        </div>
        <div>
            {isFavorite ? "💜" : "💔"}
        </div>
    </div>
    )
}

export default ContactCard
