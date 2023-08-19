let submit = document.querySelector('.submit');

let daybox = document.querySelector('.dd');
let monthbox = document.querySelector('.mm');
let yearbox = document.querySelector('.yy');
submit.addEventListener('click', () => {
    let dd = document.getElementById('day');
    let mm = document.getElementById('month');
    let yy = document.getElementById('year');
    let checking = 0;
  
    if (0 < parseInt(dd.value) && parseInt(dd.value) <= 31) {
      daybox.classList.remove('not-valid');
    } else {
      checking += 1;
      daybox.classList.add('not-valid');
    }
  
    if (0 < parseInt(mm.value) && parseInt(mm.value) <= 12) {
      monthbox.classList.remove('not-valid');
    } else {
      checking += 1;
      monthbox.classList.add('not-valid');
    }
  
    if (1900 < parseInt(yy.value) && parseInt(yy.value) <= 2023) {
      yearbox.classList.remove('not-valid');
    } else {
      checking += 1;
      yearbox.classList.add('not-valid');
    }
  
    console.log(checking);
  
    if (checking === 0) {
      ageCalculation(parseInt(yy.value), parseInt(mm.value), parseInt(dd.value));
    }
  });


function ageCalculation(year, month, day) {
    var now = new Date();
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth() + 1 ;
    var currentDate = now.getDate();
  
    var yearAge = currentYear - year;
    console.log(yearAge, currentYear, year);
  
    if (currentMonth >= month) {
      var monthAge = currentMonth - month;
    } else {
      yearAge--;
      var monthAge = 12 + currentMonth - month;
    }
  
    if (currentDate >= day) {
      var dateAge = currentDate - day;
    } else {
      monthAge--;
      var dateAge = 31 + currentDate - day;
  
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
    console.log(monthAge, month, currentMonth);
  
    document.getElementById('yResults').innerText = yearAge;
    document.getElementById('mResults').innerText = monthAge;
    document.getElementById('dResults').innerText = dateAge;
  }