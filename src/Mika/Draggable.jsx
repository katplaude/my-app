import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });

    const style = {
        // Outputs `translate3d(x, y, 0)`
        transform: CSS.Transform.toString(transform),
        position: 'absolute', // Ensures element follows cursor during drag
        zIndex: 100, // Ensures element is above other elements during drag
        cursor: 'grab', // Cursor style during drag
    };

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
            {props.children}
        </div>
    );
}

export default Draggable;
