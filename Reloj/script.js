function updateClock() {
    const now = new Date();
    
    // Hora de Buenos Aires
    const offset = -3; // Buenos Aires is UTC-3
    const buenosAiresTime = new Date(now.getTime() + (offset * 3600 * 1000));

    const hours = String(buenosAiresTime.getUTCHours()).padStart(2, '0');
    const minutes = String(buenosAiresTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(buenosAiresTime.getUTCSeconds()).padStart(2, '0');

    const year = buenosAiresTime.getUTCFullYear();
    const month = String(buenosAiresTime.getUTCMonth() + 1).padStart(2, '0');
    const day = String(buenosAiresTime.getUTCDate()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${day}/${month}/${year}`;
}

setInterval(updateClock, 1000);
updateClock(); // Incializar
