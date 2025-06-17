document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = form.querySelector('.submit-button');
    const formGroups = form.querySelectorAll('.form-group');

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
    const descriptionTextarea = form.querySelector('#description');
    if (descriptionTextarea) {
        const counter = document.createElement('div');
        counter.className = 'char-counter';
        counter.textContent = '0/200';
        descriptionTextarea.parentNode.appendChild(counter);

        descriptionTextarea.addEventListener('input', () => {
            const remaining = 200 - descriptionTextarea.value.length;
            counter.textContent = `${descriptionTextarea.value.length}/200`;
            
            if (remaining < 50) {
                counter.style.color = 'var(--accent-green)';
            } else {
                counter.style.color = 'inherit';
            }
        });
    }
}); 