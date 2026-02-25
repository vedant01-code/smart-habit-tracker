function renderHabits() {
  const list = document.getElementById("habitList");
  list.innerHTML = "";

  habits.forEach((habit, index) => {
    const percentage = Math.min(habit.streak * 10, 100);

    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${habit.name}</strong><br>
      🔥 Streak: ${habit.streak}
      <div class="progress-bar">
        <div class="progress" style="width:${percentage}%"></div>
      </div>
      <br>
      <button onclick="completeHabit(${index})">Done</button>
      <button onclick="deleteHabit(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
}
