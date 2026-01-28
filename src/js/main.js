function switchMode(el) {
  const bodyClass = document.body.classList;
  bodyClass.contains('dark')
    ? (el.innerHTML = 'Dark Mode', bodyClass.remove('dark'), localStorage.setItem('theme', 'light'))
    : (el.innerHTML = 'Light Mode', bodyClass.add('dark'), localStorage.setItem('theme', 'dark')); 
}

//
function restoreTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeBtn = document.querySelector('[onclick*="switchMode"]');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.innerHTML = 'Light Mode';
  } 
  
  else if (savedTheme === 'light') {
    document.body.classList.remove('dark');
    if (themeBtn) themeBtn.innerHTML = 'Dark Mode';
  }
}

//
document.addEventListener('DOMContentLoaded', restoreTheme);