function calculateAge() {
  var dob = document.getElementById('dob').value;
  var dobDate = new Date(dob);
  var today = new Date();
  
  var ageYears = today.getFullYear() - dobDate.getFullYear();
  var monthDiff = today.getMonth() - dobDate.getMonth();
  var dayDiff = today.getDate() - dobDate.getDate();
  
  
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      ageYears--;
      monthDiff += 12;
  }
  
 
  var ageMonths = monthDiff;
  var ageDays = dayDiff < 0 ? daysInMonth(today.getMonth() - 1, today.getFullYear()) - dobDate.getDate() + today.getDate() : dayDiff;

  var result = document.getElementById('result');
  result.innerText = "Your age is: " + ageYears + " years, " + ageMonths + " months, and " + ageDays + " days.";
}


function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
