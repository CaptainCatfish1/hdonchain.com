document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('.submit-button');
    const formGroups = form.querySelectorAll('.form-group');
    const messageInput = document.getElementById('message');
    const charCounter = document.querySelector('.char-counter');
    const maxLength = 500;

    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            return;
        }

        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showFormMessage('Thank you for your message. We will get back to you within 24 hours.', 'success');
                form.reset();
                if (charCounter) {
                    charCounter.textContent = '0/500';
                }
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Request Consultation';
        }
    });

    // Real-time validation
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        if (input) {
            input.addEventListener('blur', () => {
                validateInput(input);
            });

            input.addEventListener('input', () => {
                if (input.validity.valid) {
                    clearError(input);
                }
            });
        }
    });

    // Input validation function
    function validateInput(input) {
        if (!input.validity.valid) {
            showError(input);
        } else {
            clearError(input);
        }
    }

    // Show error message
    function showError(input) {
        const formGroup = input.closest('.form-group');
        let errorMessage = formGroup.querySelector('.error-message');

        if (!errorMessage) {
            errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            formGroup.appendChild(errorMessage);
        }

        errorMessage.textContent = getErrorMessage(input);
        input.classList.add('error');
    }

    // Clear error message
    function clearError(input) {
        const formGroup = input.closest('.form-group');
        const errorMessage = formGroup.querySelector('.error-message');

        if (errorMessage) {
            errorMessage.remove();
        }

        input.classList.remove('error');
    }

    // Get error message based on validation type
    function getErrorMessage(input) {
        if (input.validity.valueMissing) {
            return 'This field is required';
        }
        if (input.validity.typeMismatch) {
            return 'Please enter a valid email address';
        }
        if (input.validity.tooShort) {
            return `Please enter at least ${input.minLength} characters`;
        }
        if (input.validity.tooLong) {
            return `Please enter no more than ${input.maxLength} characters`;
        }
        return 'Please check this field';
    }

    // Show form submission message
    function showFormMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;

        // Remove any existing messages
        const existingMessage = form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Insert message before the form
        form.parentNode.insertBefore(messageDiv, form);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Character counter for description textarea
    if (messageInput && charCounter) {
        messageInput.addEventListener('input', () => {
            const remaining = maxLength - messageInput.value.length;
            charCounter.textContent = `${messageInput.value.length}/${maxLength}`;
            
            // Add visual feedback
            if (remaining < 50) {
                charCounter.style.color = 'var(--primary-green)';
            } else {
                charCounter.style.color = 'rgba(255, 255, 255, 0.6)';
            }
        });
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 2px solid rgba(0, 255, 136, 0.3);
            border-radius: 50%;
            border-top-color: var(--primary-green);
            animation: spin 1s linear infinite;
            margin-right: 8px;
            vertical-align: middle;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        .form-group {
            position: relative;
            transition: transform 0.3s ease;
        }

        .form-group.focused {
            transform: translateY(-2px);
        }

        .form-message {
            animation: slideIn 0.3s ease forwards;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .success-animation {
            animation: successPulse 1s ease;
        }

        @keyframes successPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }

        .error-animation {
            animation: errorShake 0.5s ease;
        }

        @keyframes errorShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        .error {
            border-color: #ff0000 !important;
            animation: errorPulse 0.5s ease;
        }

        @keyframes errorPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}); 