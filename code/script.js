let counter = 0;

function increment() {
    counter++;
    document.getElementById('counter').textContent = counter;
    
    // Вибрация (если поддерживается)
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

// Загрузка названия приложения из config.json
window.addEventListener('DOMContentLoaded', () => {
    fetch('config.json')
        .then(r => r.json())
        .then(config => {
            if (config.Name) {
                document.title = config.Name;
                const titleEl = document.getElementById('app-title');
                if (titleEl) titleEl.textContent = config.Name;
            }
        })
        .catch(() => {});
});