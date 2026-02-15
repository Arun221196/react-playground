import React from 'react';

// Error Boundary Component
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render shows the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error('Error caught by Error Boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

// Example usage in a component
function ProblematicComponent() {
    throw new Error('I crashed!');
    return <div>This will not render</div>;
}

function App() {
    return (
        <ErrorBoundary>
            <ProblematicComponent />
        </ErrorBoundary>
    );
}

export default App;