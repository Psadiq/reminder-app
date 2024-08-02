const reminders = [];

function setReminder() {
    const day = document.getElementById('day').value;
    const activity = document.getElementById('activity').value;
    const time = document.getElementById('time').value;

    if (day && activity && time) {
        const reminder = { day, activity, time };
        reminders.push(reminder);
        displayReminders();

        // Calculate the time difference and set a timeout for the reminder
        const now = new Date();
        const reminderTime = new Date();
        const [hour, minute] = time.split(':');
        reminderTime.setHours(hour);
        reminderTime.setMinutes(minute);
        reminderTime.setSeconds(0);

        const timeDifference = reminderTime - now;

        if (timeDifference > 0) {
            setTimeout(() => {
                alert(`Reminder: ${activity}`);
                // Play a chime sound here
                const audio = new Audio('chime.mp3');
                audio.play();
            }, timeDifference);
        }
    }
}

function displayReminders() {
    const reminderList = document.getElementById('reminder-list');
    reminderList.innerHTML = '';
    reminders.forEach(reminder => {
        const item = document.createElement('div');
        item.className = 'reminder-item';
        item.textContent = `${reminder.day} - ${reminder.activity} at ${reminder.time}`;
        reminderList.appendChild(item);
    });
}