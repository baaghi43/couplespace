  function loadSection(section) {
  const panel = document.getElementById("mainPanel");

  switch (section) {
    case 'chat':
      panel.innerHTML = `
        <h3>💬 Chat Room</h3>
        <div><input type="text" id="chatInput" placeholder="Say something sweet..." />
        <button onclick="sendChat()">Send</button></div>
        <div id="chatLog"></div>`;
      break;

    case 'tasks':
      panel.innerHTML = `
        <h3>📝 Dream Board</h3>
        <ul id="taskList"></ul>
        <input type="text" id="taskInput" placeholder="Add a couple goal..." />
        <button onclick="addTask()">Add</button>`;
      break;

    case 'photos':
      panel.innerHTML = `
        <h3>📸 Memory Wall</h3>
        <input type="file" id="photoInput" accept="image/*" />
        <input type="text" id="captionInput" placeholder="Caption your moment..." />
        <button onclick="uploadPhoto()">Upload</button>
        <div id="photoGallery"></div>`;
      break;

    case 'music':
      panel.innerHTML = `
        <h3>🎶 Shared Playlist</h3>
        <iframe width="300" height="80" src="https://www.youtube.com/embed/2Vv-BfVoq4g" frameborder="0" allowfullscreen></iframe>`;
      break;
  }
}

function sendChat() {
  const msg = document.getElementById("chatInput").value;
  const log = document.getElementById("chatLog");
  if (msg.trim()) {
    const entry = document.createElement("p");
    entry.textContent = "💌 " + msg;
    log.appendChild(entry);
    document.getElementById("chatInput").value = '';
  }
}

function addTask() {
  const task = document.getElementById("taskInput").value;
  if (task.trim()) {
    const li = document.createElement("li");
    li.textContent = "🌟 " + task;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = '';
  }
}

function uploadPhoto() {
  const fileInput = document.getElementById("photoInput");
  const caption = document.getElementById("captionInput").value;
  const gallery = document.getElementById("photoGallery");

  if (!fileInput.files.length) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${e.target.result}" style="width:100px;border-radius:10px;"><p>${caption}</p>`;
    gallery.appendChild(div);
  };
  reader.readAsDataURL(fileInput.files[0]);
}
