let currentDate = new Date();
        let appointments = {};

        // Initialize the calendar
        updateCalendar();

        function updateCalendar() {
            const currentMonth = currentDate.getMonth();
            const currentYear = currentDate.getFullYear();
            const calendarBody = document.getElementById("calendarBody");
            const currentMonthDisplay = document.getElementById("currentMonth");

            currentMonthDisplay.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);
            calendarBody.innerHTML = "";

            // Create a Date object for the first day of the month
            const firstDayOfMonth = new Date(currentYear, currentMonth, 1);

            // Calculate the number of days in the month
            const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

            // Calculate the day of the week for the first day of the month (0 = Sunday, 6 = Saturday)
            const firstDayOfWeek = firstDayOfMonth.getDay();

            // Generate the calendar cells
            for (let row = 0; row < 6; row++) {
                // 6 rows are sufficient for any month
                const calendarRow = document.createElement("tr");

                for (let col = 0; col < 7; col++) {
                    const dayCell = document.createElement("td");

                    if (row === 0 && col < firstDayOfWeek) {
                        // Empty cells before the start of the month
                        dayCell.textContent = "";
                    } else {
                        const day = (row * 7) + col - firstDayOfWeek + 1;

                        if (day >= 1 && day <= lastDayOfMonth) {
                            // Show the day number and appointments for the day
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

        function previousMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendar();
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendar();
        }

        function addAppointment() {
            const dateInput = document.getElementById("date");
            const date = new Date(dateInput.value);
            const appointmentInput = document.getElementById("appointment");
            const appointment = appointmentInput.value;

            // Check if the date is in the current month
            if (date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear()) {
                const day = date.getDate();
                const key = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;

                if (key in appointments) {
                    appointments[key].push(appointment);
                } else {
                    appointments[key] = [appointment];
                }

                // Update the calendar
                updateCalendar();

                // Clear input fields
                dateInput.value = "";
                appointmentInput.value = "";
            } else {
                alert("Please select a date in the current month.");
            }
        }

        function showAppointments(element) {
            const key = element.dataset.key;
            const appointmentList = appointments[key];

            if (appointmentList && appointmentList.length > 0) {
                // Create an alert message with delete buttons
                let alertMessage = "Appointments for this day:\n\n";
                appointmentList.forEach((appointment, index) => {
                    alertMessage += `${index + 1}. ${appointment}\n`;
                });
                alertMessage += "\nEnter the appointment number to delete (e.g., 1, 2, 3) or click Cancel to close the alert.";

                const userInput = prompt(alertMessage);
                if (userInput !== null) {
                    const appointmentIndex = parseInt(userInput) - 1;
                    if (!isNaN(appointmentIndex) && appointmentIndex >= 0 && appointmentIndex < appointmentList.length) {
                        // Delete the selected appointment
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
            // Delete the appointment
            appointments[key] = appointments[key].filter(item => item !== appointment);

            // Check if there are any remaining appointments for the day
            if (appointments[key].length === 0) {
                // Remove the day-highlight class if no appointments are left
                const dayCell = document.querySelector(`[data-key="${key}"]`);
                dayCell.classList.remove("day-highlight");
            }
        }
        document.addEventListener("click", event => {
            const target = event.target;

            if (target.classList.contains("day-highlight")) {
                const key = target.dataset.key;
                showAppointments(target);
            }
        });