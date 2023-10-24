function initializeCalendar() {
    window.currentDate = new Date();
    window.appointments = {};
  
    updateCalendar(window.currentDate, window.appointments);
  }
  
  function updateCalendar(currentDate, appointments) {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const calendarBody = document.getElementById("calendarBody");
    const currentMonthDisplay = document.getElementById("currentMonth");
    currentMonthDisplay.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);
    calendarBody.innerHTML = "";
  
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
  
    for (let row = 0; row < 6; row++) {
      const calendarRow = document.createElement("tr");
  
      for (let col = 0; col < 7; col++) {
        const dayCell = document.createElement("td");
  
        if (row === 0 && col < firstDayOfWeek) {
          dayCell.textContent = "";
        } else {
          const day = (row * 7) + col - firstDayOfWeek + 1;
  
          if (day >= 1 && day <= lastDayOfMonth) {
            dayCell.textContent = day;
            const key = `${currentYear}-${currentMonth + 1}-${day}`;
  
            if (key in appointments) {
              dayCell.classList.add("day-highlight");
              dayCell.dataset.key = key;
            }
          }
        }
  
        calendarRow.appendChild(dayCell);
      }
  
      calendarBody.appendChild(calendarRow);
    }
  }
  
  
  
  
  
  function showAppointments(element) {
    const key = element.dataset.key;
    const appointmentList = window.appointments[key];
  
    if (appointmentList && appointmentList.length > 0) {
      let alertMessage = "Appointments for this day:\n\n";
  
      appointmentList.forEach((appointment, index) => {
        alertMessage += `${index + 1}. ${appointment}\n`;
      });
  
      alertMessage += "\nEnter the appointment number to delete (e.g., 1, 2, 3) or click Cancel to close the alert.";
      const userInput = prompt(alertMessage);
  
      if (userInput !== null) {
        const appointmentIndex = parseInt(userInput) - 1;
  
        if (!isNaN(appointmentIndex) && appointmentIndex >= 0 && appointmentIndex < appointmentList.length) {
          deleteAppointment(key, appointmentList[appointmentIndex]);
          alert("Appointment deleted.");
        } else {
          alert("Invalid input. No appointment was deleted.");
        }
      }
    } else {
      alert("No appointments for this day.");
    }
  }
  
  function deleteAppointment(key, appointment) {
    window.appointments[key] = window.appointments[key].filter(item => item !== appointment);
  
    if (window.appointments[key].length === 0) {
      const dayCell = document.querySelector(`[data-key="${key}"]`);
      dayCell.classList.remove("day-highlight");
    }
  }
  
  document.addEventListener("click", event => {
    const target = event.target;
  
    if (target.classList.contains("day-highlight")) {
      showAppointments(target);
    }
  });

  function previousMonth() {
    window.currentDate.setMonth(window.currentDate.getMonth() - 1);
    updateCalendar(window.currentDate, window.appointments);
  }
  
  function nextMonth() {
    window.currentDate.setMonth(window.currentDate.getMonth() + 1);
    updateCalendar(window.currentDate, window.appointments);
  }
  function addAppointment() {
    const dateInput = document.getElementById("date");
    const date = new Date(dateInput.value);
    const appointmentInput = document.getElementById("appointment");
    const appointment = appointmentInput.value;
  
    if (date.getMonth() === window.currentDate.getMonth() && date.getFullYear() === window.currentDate.getFullYear()) {
      const day = date.getDate();
      const key = `${window.currentDate.getFullYear()}-${window.currentDate.getMonth() + 1}-${day}`;
  
      if (key in window.appointments) {
        window.appointments[key].push(appointment);
      } else {
        window.appointments[key] = [appointment];
      }
  
      updateCalendar(window.currentDate, window.appointments);
      dateInput.value = "";
      appointmentInput.value = "";
    } else {
      alert("Please select a date in the current month.");
    }
  }
  
  initializeCalendar();