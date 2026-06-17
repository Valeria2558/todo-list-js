let tareas = [];

function agregarTarea() {
  const input = document.getElementById("inputTarea");
  const tarea = input.value.trim();

  if (tarea === "") {
    console.error("❌ Error: no puedes agregar una tarea vacía");
    return;
  }

  tareas.push(tarea);
  console.log("✅ Tarea agregada:", tarea);
  console.info("📋 Total de tareas en la lista:", tareas.length);

  mostrarTareas();
  input.value = "";
}

function mostrarTareas() {
  const lista = document.getElementById("listaTareas");
  lista.innerHTML = "";

  tareas.forEach((tarea, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${tarea} <button onclick="eliminarTarea(${index})">🗑️</button>`;
    lista.appendChild(li);
  });

  console.log("🔄 Lista actualizada:", tareas);
}

function eliminarTarea(index) {
  const eliminada = tareas[index];
  tareas.splice(index, 1);
  console.info("🗑️ Tarea eliminada:", eliminada);
  console.info("📋 Tareas restantes:", tareas.length);
  mostrarTareas();
}