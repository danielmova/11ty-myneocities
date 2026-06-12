function switchMode(el) {
  const bodyClass = document.body.classList;
  bodyClass.contains('dark')
    ? (el.innerHTML = 'ModoNoche', bodyClass.remove('dark'), localStorage.setItem('theme', 'light'))
    : (el.innerHTML = 'ModoDía', bodyClass.add('dark'), localStorage.setItem('theme', 'dark')); 
}

//
function restoreTheme() {
  const savedTheme = localStorage.getItem('theme');
  const themeBtn = document.querySelector('[onclick*="switchMode"]');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    if (themeBtn) themeBtn.innerHTML = 'ModoDía';
  } 
  
  else if (savedTheme === 'light') {
    document.body.classList.remove('dark');
    if (themeBtn) themeBtn.innerHTML = 'ModoNoche';
  }
}

//
document.addEventListener('DOMContentLoaded', restoreTheme);