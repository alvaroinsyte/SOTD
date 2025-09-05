// Cargar canción desde song.json
fetch("song.json")
  .then(res => res.json())
  .then(song => {
    document.getElementById("title").textContent = song.title;
    document.getElementById("artist").textContent = song.artist;
    document.getElementById("cover").src = song.cover;
  })
  .catch(err => {
    console.error("Error cargando la canción:", err);
    document.getElementById("title").textContent = "Error";
    document.getElementById("artist").textContent = "No se pudo cargar";
  });
