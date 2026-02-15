// 10-accessibility.jsx

import React from 'react';

const AccessibilityComponent = () => {
    return (
        <div>
            <header role="banner">
                <h1>Welcome to the Accessibility Component</h1>
            </header>
            <main role="main">
                <section aria-labelledby="introduction">
                    <h2 id="introduction">Introduction</h2>
                    <p>This component demonstrates best practices for accessibility.</p>
                    <button aria-label="Read more about accessibility">Learn More</button>
                </section>
                <section aria-labelledby="a11y-practices">
                    <h2 id="a11y-practices">Accessibility Best Practices</h2>
                    <ul>
                        <li>Use semantic HTML elements</li>
                        <li>Ensure sufficient color contrast</li>
                        <li>Provide text alternatives for non-text content</li>
                        <li>Implement keyboard navigation</li>
                        <li>Use ARIA roles and attributes appropriately</li>
                    </ul>
                </section>
            </main>
            <footer role="contentinfo">
                <p>© 2026 Accessibility Practices</p>
            </footer>
        </div>
    );
};

export default AccessibilityComponent;