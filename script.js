// Shared utility functions for Text Toolbox

/**
 * Copy text to clipboard
 * @param {string} text - The text to copy
 * @returns {Promise<boolean>} - Success status
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            document.body.removeChild(textArea);
            return true;
        } catch (err) {
            document.body.removeChild(textArea);
            return false;
        }
    }
}

/**
 * Show temporary notification message
 * @param {string} message - The message to display
 * @param {string} type - Type of message ('success', 'error', 'info')
 */
function showNotification(message, type = 'success') {
    // Remove any existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

/**
 * Get element by ID with error handling
 * @param {string} id - Element ID
 * @returns {HTMLElement|null}
 */
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id '${id}' not found`);
    }
    return element;
}

/**
 * Clear textarea content
 * @param {HTMLTextAreaElement} textarea - The textarea to clear
 */
function clearTextarea(textarea) {
    if (textarea) {
        textarea.value = '';
        textarea.focus();
    }
}

/**
 * Add line breaks after sentences
 * @param {string} text - The input text
 * @returns {string} - Text with line breaks added
 */
function addLineBreaks(text) {
    if (!text || text.trim() === '') {
        return '';
    }
    
    // Replace sentence endings (. ! ?) followed by space with sentence ending + newline
    // This handles most common cases while preserving intentional formatting
    let result = text.replace(/([.!?])\s+/g, '$1\n');
    
    return result;
}

/**
 * Convert text to lowercase
 * @param {string} text - The input text
 * @returns {string} - Lowercase text
 */
function convertToLowercase(text) {
    return text.toLowerCase();
}

/**
 * Convert text to uppercase
 * @param {string} text - The input text
 * @returns {string} - Uppercase text
 */
function convertToUppercase(text) {
    return text.toUpperCase();
}

/**
 * Encode text to Base64
 * @param {string} text - The input text
 * @returns {string} - Base64 encoded text
 */
function encodeBase64(text) {
    try {
        return btoa(unescape(encodeURIComponent(text)));
    } catch (e) {
        throw new Error('Failed to encode to Base64');
    }
}

/**
 * Decode Base64 to text
 * @param {string} text - The Base64 encoded text
 * @returns {string} - Decoded text
 */
function decodeBase64(text) {
    try {
        return decodeURIComponent(escape(atob(text)));
    } catch (e) {
        throw new Error('Invalid Base64 string');
    }
}

/**
 * Encode text for URL
 * @param {string} text - The input text
 * @returns {string} - URL encoded text
 */
function encodeURL(text) {
    return encodeURIComponent(text);
}

/**
 * Decode URL encoded text
 * @param {string} text - The URL encoded text
 * @returns {string} - Decoded text
 */
function decodeURL(text) {
    try {
        return decodeURIComponent(text);
    } catch (e) {
        throw new Error('Invalid URL encoded string');
    }
}
