/**
 * GitHub Pages Path Configuration - Now using relative paths!
 * This file is kept for compatibility but no longer needed since we use relative paths.
 */

// Detect if we're on GitHub Pages (for analytics or other purposes)
const isGitHubPages = window.location.hostname.includes('github.io');

// Legacy function kept for compatibility - no longer needed with relative paths
function fixURL(path) {
    console.log(`fixURL called with path: ${path} - but relative paths are used instead!`);
    return path; // Just return the path as-is since we use relative paths now
}

// Make fixURL available globally for compatibility
window.fixURL = fixURL;

// /**
//  * Fix absolute paths for GitHub Pages
//  */
// function fixPaths() {
//     if (!isGitHubPages) return;
    
//     // Fix all links with href starting with "/"
//     document.querySelectorAll('a[href^="/"]').forEach(link => {
//         const href = link.getAttribute('href');
//         if (!href.startsWith('/ClimateCanada')) {
//             link.setAttribute('href', basePath + href);
//         }
//     });
    
//     // Fix all images with src starting with "/"
//     document.querySelectorAll('img[src^="/"]').forEach(img => {
//         const src = img.getAttribute('src');
//         if (!src.startsWith('/ClimateCanada')) {
//             img.setAttribute('src', basePath + src);
//         }
//     });
    
//     // Fix manifest link
//     const manifestLink = document.querySelector('link[rel="manifest"]');
//     if (manifestLink) {
//         const href = manifestLink.getAttribute('href');
//         if (href.startsWith('/') && !href.startsWith('/ClimateCanada')) {
//             manifestLink.setAttribute('href', basePath + href);
//         }
//     }
    
//     // Fix favicon
//     const favicon = document.querySelector('link[rel="icon"]');
//     if (favicon) {
//         const href = favicon.getAttribute('href');
//         if (href.startsWith('/') && !href.startsWith('/ClimateCanada')) {
//             favicon.setAttribute('href', basePath + href);
//         }
//     }
// }

// // Run when page loads
// document.addEventListener('DOMContentLoaded', function() {
//     fixPaths();
    
//     // Run again after components load
//     setTimeout(fixPaths, 200);
//     setTimeout(fixPaths, 500);
// });

// // Make available globally
// window.fixPaths = fixPaths;

// // Also apply fixes immediately for any existing content
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', fixPaths);
// } else {
//     fixPaths();
// }
