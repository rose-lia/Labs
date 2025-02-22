import { useState } from "react"
import { Pet } from "./Pet"

const initialColorsState = ["red", "orange", "yellow"]
const initialPetsState = [
	{
		name: "Willy",
		type: "Dog",
		id: 1,
	},
	{
		name: "Kashi",
		type: "Cat",
		id: 2,
	},
	{
		name: "Nemo",
		type: "Fish",
		id: 3,
	},
]
const newColorButtonsArray = ["green", "blue", "indigo", "violet"]

const ArraysEx = () => {
	const [colors, setColors] = useState<string[]>(initialColorsState)
	const [pets, setPets] = useState<Pet[]>(initialPetsState)

	const addColor = (color: string): void => {
		if (colors.includes(color)) return alert("already added!")
		setColors((c) => [...c, color])
	}

	const deletePet = (index: number): void => {
		const newPetArr = [...pets]
		newPetArr.splice(index, 1)
		setPets(newPetArr)
	}

	return (
		<>
			<h1>CoLoRs</h1>
			<ol>
				{colors.map((color, index) => (
					<li key={index}>{color}</li>
				))}
			</ol>
			{newColorButtonsArray.map((newColor, index) => (
				<button
					key={index}
					onClick={() => addColor(newColor)}
				>
					Add {newColor}
				</button>
			))}
			<h1>PeTs</h1>
			<table>
				<tr>
					<th>Name</th>
					<th>Type</th>
					<th>Action</th>
				</tr>
				{pets.map((pet, index) => (
					<tr key={pet.id}>
						<td>{pet.name}</td>
						<td>{pet.type}</td>
						<td>
							<button onClick={() => deletePet(index)}>Delete</button>
						</td>
					</tr>
				))}
			</table>
		</>
	)
}

export default ArraysEx
