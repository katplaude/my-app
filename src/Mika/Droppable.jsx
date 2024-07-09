import React from 'react';
import { useDroppable } from '@dnd-kit/core';

function Droppable(props) {
    const { isOver, setNodeRef } = useDroppable({
        id: props.id,
    });

    const style = {
        width: props.width, // Width defined by props
        height: props.height, // Height defined by props
        backgroundColor: isOver ? '#EF9636' : '#E0E0E0', // Change background color on hover
        borderRadius: '50%', // Circular shape
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: props.left,
        top: props.top,
        zIndex: 1, // Ensure it's above other elements
    };

    return (
        <div ref={setNodeRef} style={style}>
            {props.children}
        </div>
    );
}

export default Droppable;
