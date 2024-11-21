const submissions = [
	{ name: "Jane", score: 95, passed: true },
	{ name: "Joe", score: 77, passed: true },
	{ name: "Jack", score: 59, passed: false },
	{ name: "Jill", score: 88, passed: true },
];

const addSubmission = (array, newName, newScore) => {
	const newSubmission = {
		name: newName,
		score: newScore,
		passed: newScore >= 60 ? true : false,
	};
	array.push(newSubmission);
};
addSubmission(submissions, "Lia", 70);
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
	if (index >= 0 && index < array.length) {
		array.splice(index, 1);
	}
};
submissions.splice(2, 1);
console.log(submissions);

/*
Declare a function named deleteSubmissionByName
Parameter(s): array, name
Functionality: remove the object from the array that has the provided name. 
Incorporate the findIndex method and the splice method.
*/

const deleteSubmissionByName = (array, name) => {
	const itemIndexToDelete = array.findIndex(
		(element) => element.name === name
	);
	if (itemIndexToDelete !== -1) {
		array.splice(itemIndexToDelete, 1);
	}
};
deleteSubmissionByName(submissions, "Joe");
console.log(
	"AFTER deleteSubmissionByName, the submissions are: ",
	submissions
);

/*
Declare a function named editSubmission
Parameter(s): array, index, score
Functionality: update an object’s score in the array at the specified index.
Use conditional statements to set the value for the passed property to true if the
score is greater than or equal to 60 and false otherwise. No array method necessary.
*/

const editSubmission = (array, indexToEdit, newScore) => {
	array.forEach((item, index) => {
		if (index === indexToEdit) {
			array[index].score = newScore;
			array[index].passed = newScore >= 60 ? true : false;
		}
	});
};
editSubmission(submissions, 3, 80);
console.log(
	"AFTER editSubmission, the submissions are: ",
	submissions
);

/*
Declare a function named findSubmissionByName
Parameter(s): array, name
Functionality: return the object in the array that has the provided name. Use the find method.
*/

const findSubmissionByName = (array, nameToFind) => {
	return array.find((element, index) => element.name === nameToFind);
};
console.log(findSubmissionByName(submissions, "Jane"));

/*
Declare a function named findLowestScore
Parameter(s): array
Functionality: return the object in the array that has the lowest score. 
*/

const findLowestScore = (array) => {
	return array.reduce((lowest, current) =>
		current.score < lowest.score ? current : lowest
	);
};
console.log(findLowestScore(submissions));

/*
Declare a function named findAverageScore
Parameter(s): array
Functionality: return the average quiz score.
*/

const findAverageScore = (array) => {
	const scoreSum = array.reduce(
		(accumulator, currentValue) => accumulator + currentValue.score,
		0
	);
	return scoreSum / array.length;
};
console.log(findAverageScore(submissions));

/*
Declare a function named filterPassing
Parameter(s): array
Functionality: return a new array using the filter method.
The filter method should find objects in the array that have passing scores. 
*/

const filterPassing = (array) => {
    return array.filter((item) => item.passed)
};
console.log(filterPassing(submissions))

/*
Declare a function named filter90AndAbove
Parameter(s): array
Functionality: return a new array using the filter method. The filter method 
should find objects in the array that have scores greater than or equal to 90.
*/

const filter90AndAbove = (array) => {
    return array.filter((item) => item.score >= 90)
};
console.log(filter90AndAbove(submissions))
