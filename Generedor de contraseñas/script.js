document.addEventListener('DOMContentLoaded', function() {
    const charRange = document.getElementById('charRange');
    const charCount = document.getElementById('charCount');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const passwordField = document.getElementById('passwordField');

    charRange.addEventListener('input', function() {
        charCount.textContent = charRange.value;
    });

    generateBtn.addEventListener('click', function() {
        const password = generatePassword(charRange.value);
        passwordField.value = password;
    });

    clearBtn.addEventListener('click', function() {
        passwordField.value = '';
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});
