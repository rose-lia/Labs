import User from "../models/User"
import HTTPHandler from "../utils/HTTPHandler"

// CREATE

export const postUser: HTTPHandler = async (req, res) => {
	try {
		const user = new User(req.body)
		await user.save()
		res.status(201).send(user)
	} catch (error) {
		res.status(400).send("Bad Request")
	}
}

// READ MANY

export const getUsers: HTTPHandler = async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).send(users)
	} catch (error) {
		res.status(500).send("Bad Request!")
	}
}

// READ ONE

export const getUser: HTTPHandler = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		res.status(200).send(user)
	} catch (error) {
		res.status(404).send("User Not Found!")
	}
}

// UPDATE

export const putUser: HTTPHandler = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true }
		)
		res.status(200).send(user)
	} catch (error) {
		res.status(404).send("User not found!")
	}
}

// DESTROY

export const deleteUser: HTTPHandler = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (error) {
		res.status(404).send("User not found!")
	}
}
