const addTaskButton = document.getElementById("addTask");
const taskBox = document.getElementById("task-box");
const submitNewTaskButton = document.getElementById("submitForm");
const form = document.getElementById("newForm");
const titleInput = document.querySelector('#inputTitle');
const contentInput = document.querySelector('#inputContent');		
let taskClasses = ["card", "dark-div-2", "cardText"];
let dateToday = new Date();
let monthMapping = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

let dateTodayElement = document.querySelector("#dateToday");
let dateArray = [
	monthMapping[dateToday.getMonth()],
	dateToday.getDate(),
	dateToday.getFullYear(),
];
let workTime = document.querySelector("#workTime");

dateTodayElement.querySelectorAll("p").forEach((item, index) => {
	item.innerHTML = dateArray[index];
	console.log(item, index);
});

let minutes = (hours = seconds = count = 0);
setInterval(() => {
	count += 1;
	if (count === 60) {
		count = 0;
		minutes += 1;
	}
	if (minutes === 60) {
		minutes = 0;
		hours += 1;
	}
	seconds = count;
	workTime.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

function add() {newFormOpen();}
function implement() {
	let newTask = document.createElement("div");
	let newTaskTitle = document.createElement("h2");
	let newTaskText = document.createElement("p");
	let title = titleInput.value.toUpperCase();
	let content = contentInput.value.toLowerCase();
	newTask.classList.add(...taskClasses);
	
	newTaskTitle.textContent = title;
	newTaskText.textContent = content;
	newTask.appendChild(newTaskTitle);
	newTask.appendChild(newTaskText);
	taskBox.appendChild(newTask);

	newFormClose()
}

function remove() {
	let tasks = document.querySelectorAll("#task-box .card");
	if (tasks.length <= 0) return;
	let lastTask = tasks[tasks.length - 1];
	taskBox.removeChild(lastTask);
};

let newForm = document.querySelector("#newForm");

let [openFormBox, closeFormBox] = [
	(form) => {return () => {
		form.style.opacity = "1";
		form.style.pointerEvents = "all";
	}},
	(form) => {return () => {
		form.style.opacity = "0";
		form.style.pointerEvents = "none";
	}}
]

let [newFormOpen, newFormClose] = [
	openFormBox(newForm),
	closeFormBox(newForm),
];
