/**
 * GreenData - Component Injection Script
 * Dynamically loads header and footer components into pages
 */

document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', '/components/header.html');
    loadComponent('footer-placeholder', '/components/footer.html');
});

/**
 * Load a component from a URL and inject it into the specified element
 */
async function loadComponent(elementId, componentUrl) {
    try {
        const element = document.getElementById(elementId);
        if (!element) return;

        // Adjust URL for GitHub Pages
        const isGitHubPages = window.location.hostname.includes('github.io');
        const adjustedUrl = isGitHubPages ? '/ClimateCanada' + componentUrl : componentUrl;

        const response = await fetch(adjustedUrl);
        if (!response.ok) throw new Error(`Failed to fetch ${adjustedUrl}`);

        const html = await response.text();
        element.innerHTML = html;

        // Execute any scripts in the loaded component
        const scripts = element.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.head.appendChild(newScript);
            script.remove();
        });

        // Fix paths after loading
        if (window.fixPaths) {
            setTimeout(window.fixPaths, 100);
        }

    } catch (error) {
        console.error(`Error loading component:`, error);
        
        // Simple fallback
        if (elementId === 'header-placeholder') {
            document.getElementById(elementId).innerHTML = `
                <header class="bg-[#004E66] text-white shadow-lg">
                    <div class="container mx-auto px-4 py-3 text-center">
                        <h1 class="text-xl font-bold">GreenData</h1>
                    </div>
                </header>
            `;
        }
        
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
