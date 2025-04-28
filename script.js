document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const comment = document.getElementById('comment').value.trim();
  
    if (name && comment) {
      const commentBox = document.createElement('div');
      commentBox.className = 'comment';
      commentBox.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;
  
      document.getElementById('comments').appendChild(commentBox);
  
      // Limpa o formulário
      document.getElementById('commentForm').reset();
    }
  });
  