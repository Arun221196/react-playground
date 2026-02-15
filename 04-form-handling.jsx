// 04-form-handling.jsx

import React, { useState } from 'react';

// Controlled Component Example
function ControlledComponent() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label>
                Controlled Input:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <p>Value: {value}</p>
        </div>
    );
}

// Uncontrolled Component Example
class UncontrolledComponent extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('A name was submitted: ' + this.inputRef.current.value);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Uncontrolled Input:
                    <input type="text" ref={this.inputRef} />
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

// Main Component
function FormHandling() {
    return (
        <div>
            <h1>Form Handling Examples</h1>
            <ControlledComponent />
            <UncontrolledComponent />
        </div>
    );
}

export default FormHandling;