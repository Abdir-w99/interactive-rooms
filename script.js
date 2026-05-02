const rooms = [
  {
    name: "Hallway",
    description: "You are in the hallway.",
    options: ["Living room", "Bedroom"],
  },
  {
    name: "Kitchen",
    description: "You are in the kitchen.",
    options: ["Living room"],
  },
  {
    name: "Bedroom",
    description: "You are in the bedroom.",
    options: ["Hallway"],
  },
  {
    name: "Living room",
    description: "You are in the living room.",
    options: ["Kitchen", "Hallway"],
  },
];

let currentRoom = rooms[0];

const description = document.querySelector("#description");
const buttons = document.querySelector("#buttons");

function showRoom() {
  description.textContent = currentRoom.description;

  buttons.innerHTML = "";

  currentRoom.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = `Go to ${option}`;

    button.addEventListener("click", () => {
      currentRoom = rooms.find((room) => room.name === option);
      showRoom();
    });

    buttons.appendChild(button);
  });
}

showRoom();
