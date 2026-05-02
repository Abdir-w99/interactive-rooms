const rooms = [
  {
    name: "Hallway",
    image: "./assets/images/hallway.jpg",
    description: "You are in the hallway",
    options: ["Living room", "Bedroom"],
  },
  {
    name: "Kitchen",
    image: "./assets/images/kitchen.jpg",
    description: "You are in the kitchen",
    options: ["Living room"],
  },
  {
    name: "Bedroom",
    image: "./assets/images/bedroom.jpg",
    description: "You are in the bedroom",
    options: ["Hallway"],
  },
  {
    name: "Living room",
    image: "./assets/images/living-room.jpg",
    description: "You are in the living room",
    options: ["Kitchen", "Hallway"],
  },
];

let currentRoom = rooms[0];

const description = document.querySelector("#description");
const buttons = document.querySelector("#buttons");
const roomImage = document.querySelector("#room-image");

function showRoom() {
  description.textContent = currentRoom.description;
  roomImage.src = currentRoom.image;

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
