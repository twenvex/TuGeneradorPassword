const generateBtn = document.getElementById('generateBtn');
const contrasena = document.getElementById('contrasena');
const lengthInput = document.getElementById('lengthInput');
const clearBtn = document.getElementById('clearBtn');
const input =document.getElementById('contrasena')

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function evaluatePasswordSecurity(password) {
    let score = 0;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) return "poco-segura";
    if (score === 3) return "segura";
    return "muy-segura";

    
}


generateBtn.addEventListener('click', function() {
    const length = parseInt(lengthInput.value);
    
    if (length < 8) {
        alert("La longitud de la contraseña debe ser de al menos 8 caracteres.");
        contrasena.value = '';
        contrasena.className = '';
    } else {
        const password = generatePassword(length);
        contrasena.value = password;
        const security = evaluatePasswordSecurity(password);
        
        
        contrasena.className = `security-${security}`;
    }
});


function copyToClipboar() {
    navigator.clipboard.writeText(input.value).then(() => {
        alert('Tu contraseña se ha ido al portapapeles :)')
    })
}

clearBtn.addEventListener('click', function() {
    contrasena.value = '';
    lengthInput.value = '';
    contrasena.className = '';
});









