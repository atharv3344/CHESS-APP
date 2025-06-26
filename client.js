
function sendDrawRequest() {
  if (socket) socket.emit('drawRequest');
}

function resignGame() {
  if (socket) {
    socket.emit('resign');
    alert("You resigned. You lose.");
  }
}

function sendChat() {
  const msg = document.getElementById("chatInput").value;
  if (msg && socket) {
    socket.emit('chat', msg);
    document.getElementById('chatInput').value = "";
  }
}
