const rooms = [
  {
    name: "Hallway",
    description: "You are in the hallway.",
  },
  {
    name: "Kitchen",
    description: "You are in the kitchen.",
  },
];

let currentRoom = 0;

const description = document.querySelector("#description");
const button = document.querySelector("#change-room");

function showRoom() {
  description.textContent = rooms[currentRoom].description;

  if (currentRoom === 0) {
    button.textContent = "Go to Kitchen";
  } else {
    button.textContent = "Go to Hallway";
  }
}

button.addEventListener("click", () => {
  if (currentRoom === 0) {
    currentRoom = 1;
  } else {
    currentRoom = 0;
  }

  showRoom();
});

showRoom();
