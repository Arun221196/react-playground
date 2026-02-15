// Best practices for rendering lists with proper key usage in React

import React from 'react';

const ExampleList = () => {
    const items = ['Apple', 'Banana', 'Cherry', 'Date'];

    return (
        <ul>
            {items.map((item, index) => (
                // Use a stable and unique key for each element
                // Avoid using array index as key when items can change
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
};

export default ExampleList;