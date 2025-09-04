// Contraseña de admin
const ADMIN_PASS = "1234";

document.getElementById("adminBtn").addEventListener("click", () => {
  const form = document.getElementById("adminForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
});

function saveSong() {
  const pass = document.getElementById("password").value;
  if (pass !== ADMIN_PASS) {
    alert("Contraseña incorrecta");
    return;
  }

  const title = document.getElementById("titleInput").value;
  const artist = document.getElementById("artistInput").value;
  const file = document.getElementById("coverInput").files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const song = {
        title: title,
        artist: artist,
        cover: e.target.result
      };
      localStorage.setItem("songOfDay", JSON.stringify(song));
      updateUI(song);
    };
    reader.readAsDataURL(file); // convierte imagen a Base64
  } else {
    const song = {
      title: title,
      artist: artist,
      cover: document.getElementById("cover").src // mantiene la actual si no se cambia
    };
    localStorage.setItem("songOfDay", JSON.stringify(song));
    updateUI(song);
  }

  alert("Canción guardada correctamente");
  document.getElementById("adminForm").style.display = "none";
}

function updateUI(song) {
  document.getElementById("title").textContent = song.title;
  document.getElementById("artist").textContent = song.artist;
  document.getElementById("cover").src = song.cover;
}

