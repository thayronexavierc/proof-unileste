      // Excluir mensagem
      function deleteMessage(id) {
        messages = messages.filter((message) => message.id !== id);
        renderMessages();
      }
