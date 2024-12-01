    // Abrir modal de edição com a mensagem atual
    function openEditModal(id) {
        const message = messages.find(msg => msg.id === id);
        document.getElementById('editMessageInput').value = message.text;
        currentEditId = id;
        $('#editModal').modal('show');
      }
  
      // Salvar alteração
      function saveEdit() {
        const newText = document.getElementById('editMessageInput').value.trim();
        if (newText === '') return;
        messages = messages.map(msg => msg.id === currentEditId ? { ...msg, text: newText } : msg);
        $('#editModal').modal('hide');
        renderMessages();
      }
  
  