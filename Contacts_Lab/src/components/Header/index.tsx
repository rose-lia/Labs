import { FC } from "react"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export interface HeaderProps {
	title: string
}

const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<header className="header">
			<FontAwesomeIcon
				color="#e36940"
				icon={faBars}
				size="xl"
				className="menu-icon"
			/>
			<h1 className="header-title">{title}</h1>
		</header>
	)
}

export default Header
