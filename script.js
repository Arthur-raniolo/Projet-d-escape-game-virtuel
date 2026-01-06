document.addEventListener('DOMContentLoaded', () => {

  // BOUTONS SCÈNES
  const buttons = [
    ['startButton', 'porte.html'],
    ['startButton1', 'enigme1.html'],
    ['startButton2', 'enigme2.html'],
    ['startButton3', 'enigme3.html'],
    ['startButton4', 'enigme4.html'],
    ['startButton5', 'enigme5.html'],
    ['startButton6', 'enigme6.html'],
    ['startButton7', 'solutions.html'],
  ];

  buttons.forEach(([id, scene]) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        window.location.href = scene;
      });
    }
  });

  // CODE
  let currentCode = '';
  const correctCode = '424225';
  const keys = document.querySelectorAll('.key');
  const codeDisplay = document.getElementById('codeDisplay');
  const clearBtn = document.getElementById('clearBtn');
  const validateBtn = document.getElementById('validateBtn');

  function updateDisplay() {
    let display = currentCode;
    while (display.length < 6) {
      display += '-';
    }
    codeDisplay.textContent = display;
  }

  function checkCode() {
    if (currentCode === correctCode) {
      window.location.href = "fin.html";
    } else {
      codeDisplay.style.color = '#f33';
      codeDisplay.textContent = 'ERREUR';
      setTimeout(() => {
        currentCode = '';
        codeDisplay.style.color = '#0f0';
        updateDisplay();
      }, 1500);
    }
  }

  keys.forEach(key => {
    key.addEventListener('click', () => {
      const num = key.getAttribute('data-num');
      if (num && currentCode.length < 6) {
        currentCode += num;
        updateDisplay();
      }
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      currentCode = '';
      updateDisplay();
    });
  }

  if (validateBtn) {
    validateBtn.addEventListener('click', () => {
      if (currentCode.length === 6) {
        checkCode();
      } else {
        codeDisplay.style.color = '#f33';
        codeDisplay.textContent = 'ERREUR';
        setTimeout(() => {
          currentCode = '';
          codeDisplay.style.color = '#0f0';
          updateDisplay();
        }, 1500);
      }
    });
  }
});