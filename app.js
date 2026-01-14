const form = document.getElementById("formEncuesta");
const respuesta = document.getElementById("respuesta");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    gusta: document.getElementById("gusta").value,
  };

  try {
    const res = await fetch("http://localhost:3000/api/encuesta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    respuesta.textContent = result.mensaje;
  } catch (err) {
    respuesta.textContent = "Servidor caído (mantenimiento)";
  }
});
