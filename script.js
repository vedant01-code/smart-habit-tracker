let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveHabits() {
  localStorage.setItem("habits", JSON.stringify(habits));
}

function renderHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";

  habits.forEach((habit, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${habit.name} 
      🔥 Streak: ${habit.streak}
      <button onclick="completeHabit(${index})">Done</button>
      <button onclick="deleteHabit(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addHabit() {
  const input = document.getElementById("habitInput");
  if (input.value === "") return;

  habits.push({ name: input.value, streak: 0 });
  input.value = "";
  saveHabits();
  renderHabits();
}

function completeHabit(index) {
  habits[index].streak++;
  saveHabits();
  renderHabits();
}

function deleteHabit(index) {
  habits.splice(index, 1);
  saveHabits();
  renderHabits();
}

renderHabits();
