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
        if (!href.startsWith(basePath)) {
            link.setAttribute('href', basePath + href);
        }
    });
    
    // Fix all images with src starting with "/"
    document.querySelectorAll('img[src^="/"]').forEach(img => {
        const src = img.getAttribute('src');
        if (!src.startsWith(basePath)) {
            img.setAttribute('src', basePath + src);
        }
    });
    
    // Fix all scripts with src starting with "/"
    document.querySelectorAll('script[src^="/"]').forEach(script => {
        const src = script.getAttribute('src');
        if (!src.startsWith(basePath)) {
            script.setAttribute('src', basePath + src);
        }
    });
    
    // Fix manifest link
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink) {
        const href = manifestLink.getAttribute('href');
        if (href.startsWith('/') && !href.startsWith(basePath)) {
            manifestLink.setAttribute('href', basePath + href);
        }
    }
    
    // Fix favicon
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
        const href = favicon.getAttribute('href');
        if (href.startsWith('/') && !href.startsWith(basePath)) {
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
            return originalLoadComponent(elementId, adjustedUrl).then(() => {
                // Fix paths in newly loaded components
                setTimeout(() => {
                    fixPaths();
                }, 100);
            });
        };
    }
}

/**
 * Fix paths in dynamically loaded content (like components)
 */
function fixDynamicContent() {
    if (!isGitHubPages) return;
    
    // Create a MutationObserver to watch for new content
    const observer = new MutationObserver((mutations) => {
        let needsFixing = false;
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                needsFixing = true;
            }
        });
        
        if (needsFixing) {
            setTimeout(() => {
                fixPaths();
            }, 50);
        }
    });
    
    // Start observing the document
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Apply fixes when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    fixPaths();
    updateComponentPaths();
    fixDynamicContent();
    
    console.log('GitHub Pages configuration applied');
    console.log('Base path:', basePath);
    console.log('Is GitHub Pages:', isGitHubPages);
    
    // Also fix paths after a delay to catch any late-loading content
    setTimeout(() => {
        fixPaths();
    }, 500);
    
    setTimeout(() => {
        fixPaths();
    }, 1000);
});

// Make fixPaths globally accessible
window.fixPaths = fixPaths;

// Also apply fixes immediately for any existing content
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPaths);
} else {
    fixPaths();
}
