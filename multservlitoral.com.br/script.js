const whatsappMessage = 'Olá, vim pelo site e preciso de conserto de lava e seca. Pode me ajudar?';

const whatsappLink = 'https://wa.me/5513997169184?text=' + encodeURIComponent(whatsappMessage);

const copyButtons = document.querySelectorAll('.copy-message');

copyButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(whatsappMessage);
      const previousText = button.textContent;
      button.textContent = 'Mensagem copiada!';
      button.classList.add('copied');

      setTimeout(() => {
        button.textContent = previousText;
        button.classList.remove('copied');
      }, 1800);
    } catch (error) {
      button.textContent = 'Não foi possível copiar';
      setTimeout(() => {
        button.textContent = 'Copiar mensagem';
      }, 1800);
    }
  });
});

const whatsappAnchors = document.querySelectorAll('a[href*="wa.me"]');
whatsappAnchors.forEach((anchor) => {
  anchor.setAttribute('href', whatsappLink);
});
