let messages = [];
let currentEditId = null;

// Adicionar mensagem
function addMessage() {
    const input = document.getElementById('messageInput');
    if (input.value.trim() === '') return;
    const newMessage = { id: Date.now(), text: input.value.trim() };
    messages.push(newMessage);
    input.value = '';
    renderMessages();
    }

    // Renderizar mensagens
    function renderMessages() {
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = '';
    messages.forEach((message) => {
        const div = document.createElement('div');
        div.className = 'message';
        div.innerHTML = `
        <p>${message.text}</p>
        <div class="actions">
            <button onclick="openEditModal(${message.id})"><i class="bi bi-pencil-square"></i></button>
            <button class="delete-btn" onclick="deleteMessage(${message.id})"><i class="bi bi-trash"></i></button>
        </div>
        `;
        messageList.appendChild(div);
    });
    }
  