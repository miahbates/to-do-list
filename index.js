const submitButton = document.getElementById("submit");
const todoList = document.getElementById("todoList");

let idx = 0;

const addItemToList = (e) => {
	e.preventDefault();

	// test value
	let itemToAdd = document.getElementById("addItem").value;
	//const todoList = document.getElementById("todoList");

	const itemContainer = document.createElement("LI");
	itemContainer.setAttribute("class", `list-item`);
	const itemLabel = document.createElement("LABEL");
	const checkBox = document.createElement("INPUT");

	const deleteButton = document.createElement("BUTTON");
	deleteButton.type = "submit";
	deleteButton.setAttribute("id", "deleteButton");
	deleteButton.textContent = "X";

	// label
	itemLabel.setAttribute("for", `listitem-${idx}`);
	itemLabel.innerHTML = itemToAdd;

	checkBox.type = "checkbox";
	checkBox.setAttribute("id", `listitem-${idx}`);
	checkBox.setAttribute("class", "list_item");

	itemContainer.appendChild(itemLabel);
	itemContainer.appendChild(checkBox);
	itemContainer.appendChild(deleteButton);
	todoList.appendChild(itemContainer);

	idx++;

	completedTasks();
};

const completedTasks = () => {
	// complete tasks
	let completeTask = todoList.children;

	if (completeTask.length === 0) {
		console.log("no items");
	}

	for (let i = 0; i < completeTask.length; i++) {
		// get label
		let completeLabel = completeTask[i].childNodes[0];

		//get checkbox
		let completeCheckBox = completeTask[i].childNodes[1];

		completeLabel.addEventListener("click", function (e) {
			console.log("index : label clicked");
		});

		completeCheckBox.addEventListener("change", (e) => {
			if (completeCheckBox.checked == true) {
				console.log("item checked as completed");
			} else {
				console.log("item not checked as completed");
			}
		});
	}
};

const deleteTasks = () => {};

submitButton.addEventListener("click", addItemToList);

// Miah's old code

// // grab buttons
// const completeButton = document.querySelector("#complete");
// const deleteButton = document.querySelector("#delete");
// // console.log(checkbox);

// // grab section
// const completedSection = document.querySelector("#completed");

// completeButton.addEventListener("click", event => {
//   // get all heckboxes in todolist section
//   const checkbox = document.querySelectorAll('#todoList input[type="checkbox"]');
//   // console.log(checkbox);
//   // loop over to find checked checkbox
//   for (let i = 0; i < checkbox.length; i++) {
//     // console.log(i);
//     if (checkbox[i].checked) {
//       // target li which have data value = to checkbox ticked
//       const listItem = document.querySelector(`li[data-value=${checkbox[i].value}]`);
//       // append to new section
//       completedSection.appendChild(listItem);
//     }
//   }
// });

// deleteButton.addEventListener("click", event => {
//   const checkbox = document.querySelectorAll('#completed input[type="checkbox"]');
//   // console.log(checkbox);
//   for (let i = 0; i < checkbox.length; i++) {
//     if (checkbox[i].checked) {
//       const listItem = document.querySelector(`li[data-value=${checkbox[i].value}]`);
//       listItem.remove();
//     }
//   }
// });
