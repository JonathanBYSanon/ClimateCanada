/**
 * GreenData - Component Injection Script
 * Dynamically loads header and footer components into pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Wait for GitHub Pages config to load first
    setTimeout(() => {
        loadComponent('header-placeholder', '/components/header.html');
        loadComponent('footer-placeholder', '/components/footer.html');
    }, 100);
});

/**
 * Load a component from a URL and inject it into the specified element
 * @param {string} elementId - The ID of the element to inject the component into
 * @param {string} componentUrl - The URL of the component to load
 */
async function loadComponent(elementId, componentUrl) {
    try {
        const element = document.getElementById(elementId);
        if (!element) {
            console.warn(`Element with ID '${elementId}' not found`);
            return;
        }

        const response = await fetch(componentUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${componentUrl}: ${response.status}`);
        }

        const html = await response.text();
        element.innerHTML = html;

        // Execute any scripts in the loaded component
        const scripts = element.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.head.appendChild(newScript);
            script.remove();
        });

        console.log(`Successfully loaded component: ${componentUrl}`);
    } catch (error) {
        console.error(`Error loading component ${componentUrl}:`, error);
        
        // Fallback content for header
        if (elementId === 'header-placeholder') {
            document.getElementById(elementId).innerHTML = `
                <header class="bg-[#004E66] text-white shadow-lg">
                    <div class="container mx-auto px-4 py-3">
                        <div class="flex items-center justify-center">
                            <h1 class="text-xl font-bold">GreenData</h1>
                        </div>
                    </div>
                </header>
            `;
        }
        
        // Fallback content for footer
        if (elementId === 'footer-placeholder') {
            document.getElementById(elementId).innerHTML = `
                <footer class="bg-[#004E66] text-white mt-auto">
                    <div class="container mx-auto px-4 py-4 text-center">
                        <p class="text-gray-400 text-sm">© 2025 GreenData – Tous droits réservés.</p>
                    </div>
                </footer>
            `;
        }
    }
}

/**
 * Utility function to get current page name
 * @returns {string} The current page name
 */
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page.replace('.html', '');
}

/**
 * Set the page title dynamically based on current page
 */
function setPageTitle() {
    const currentPage = getCurrentPage();
    const titles = {
        'index': 'GreenData - Accueil',
        'dashboard': 'GreenData - Visualisation',
        'team': 'GreenData - Équipe',
        '404': 'GreenData - Page non trouvée'
    };
    
    const title = titles[currentPage] || 'GreenData';
    document.title = title;
}

// Set page title when script loads
setPageTitle();
