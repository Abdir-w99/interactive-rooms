const rooms = [
  {
    name: "Hallway",
    description: "You are in the hallway.",
  },
  {
    name: "Kitchen",
    description: "You are in the kitchen.",
  },
  {
    name: "Bedroom",
    description: "You are in the bedroom.",
  },
  {
    name: "Living room",
    description: "You are in the living room.",
  },
];

let currentRoom = 0;

const description = document.querySelector("#description");
const button = document.querySelector("#change-room");

function showRoom() {
  description.textContent = rooms[currentRoom].description;

  button.textContent = "Go to next room";
}
button.addEventListener("click", () => {
  currentRoom++;

  if (currentRoom === rooms.length) {
    currentRoom = 0;
  }

  showRoom();
});

showRoom();
