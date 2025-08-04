/**
 * GitHub Pages Path Configuration
 * Automatically adjusts paths based on deployment environment
 */

// Detect if we're on GitHub Pages
const isGitHubPages = window.location.hostname.includes('github.io');
const repoName = isGitHubPages ? window.location.pathname.split('/')[1] : '';
const basePath = isGitHubPages ? `/${repoName}` : '';

/**
 * Fix absolute paths for GitHub Pages
 */
function fixPaths() {
    if (!isGitHubPages) return;
    
    // Fix all links with href starting with "/"
    document.querySelectorAll('a[href^="/"]').forEach(link => {
        const href = link.getAttribute('href');
        link.setAttribute('href', basePath + href);
    });
    
    // Fix all images with src starting with "/"
    document.querySelectorAll('img[src^="/"]').forEach(img => {
        const src = img.getAttribute('src');
        img.setAttribute('src', basePath + src);
    });
    
    // Fix all scripts with src starting with "/"
    document.querySelectorAll('script[src^="/"]').forEach(script => {
        const src = script.getAttribute('src');
        script.setAttribute('src', basePath + src);
    });
    
    // Fix manifest link
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
        const href = manifestLink.getAttribute('href');
        if (href.startsWith('/')) {
            manifestLink.setAttribute('href', basePath + href);
        }
    }
    
    // Fix favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        const href = favicon.getAttribute('href');
        if (href.startsWith('/')) {
            favicon.setAttribute('href', basePath + href);
        }
    }
}

/**
 * Update component loading for GitHub Pages
 */
function updateComponentPaths() {
    if (window.loadComponent && isGitHubPages) {
        const originalLoadComponent = window.loadComponent;
        window.loadComponent = function(elementId, componentUrl) {
            const adjustedUrl = componentUrl.startsWith('/') ? basePath + componentUrl : componentUrl;
            return originalLoadComponent(elementId, adjustedUrl);
        };
    }
}

// Apply fixes when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    fixPaths();
    updateComponentPaths();
    
    console.log('GitHub Pages configuration applied');
    console.log('Base path:', basePath);
    console.log('Is GitHub Pages:', isGitHubPages);
});

// Also apply fixes immediately for any existing content
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPaths);
} else {
    fixPaths();
}
