import React, { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import {
    DndContext,
    DragOverlay,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    useSortable,
    SortableContext,
    horizontalListSortingStrategy,
    arrayMove,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import LetterE from "../assets/e.png";
import LetterH from "../assets/h.png";
import LetterI from "../assets/l.png";
import LetterI2 from "../assets/l.png";
import LetterO from "../assets/o.png";
import cloud from '../assets/cloud.png';
import badGuy from '../assets/badGuy.png';
import mikaPfp from '../assets/mikaPfp.png';
import tapButton from '../assets/tapButton.png';
import './Mika.css';

const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    position: "relative",
};

const containerStyle = {
    background: "#8355F5",
    border: "4px solid #eee",
    padding: 10,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    minHeight: 100,
    minWidth: "80%",
    justifyContent: "center",
    position: "relative",        // Set position to relative (or absolute)
    top: "-5rem",               // Set top position in rem units
    left: "0rem",
};

function Item({ id, imageSrc }) {
    const style = {
        width: 100,
        height: 270,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
    };
    return (
        <div style={style}>
            <img
                src={imageSrc}
                alt={id}
                style={{ maxWidth: "180%", maxHeight: "100%" }}
            />
        </div>
    );
}

function SortableItem({ id, imageSrc, className }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    return (
        <div
            className={className}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <Item id={id} imageSrc={imageSrc} />
        </div>
    );
}

function Container({ id, items }) {
    const { attributes, setNodeRef, isOver } = useSortable({ id });
    const containerStyles = {
        ...containerStyle,
        backgroundColor: isOver ? "lightblue" : "#8355F5",
    };
    return (
        <SortableContext
            id={id}
            items={items.map((item) => item.id)}
            strategy={horizontalListSortingStrategy}
        >
            <div ref={setNodeRef} {...attributes} style={containerStyles}>
                {items.map((item) => (
                    <SortableItem
                        key={item.id}
                        id={item.id}
                        imageSrc={item.imageSrc}
                        className={item.className}
                    />
                ))}
            </div>
        </SortableContext>
    );
}

export default function App() {
    const [items, setItems] = useState({
        root: [
            { id: "1", imageSrc: LetterE, className: "e" },
            { id: "2", imageSrc: LetterH, className: "h" },
            { id: "3", imageSrc: LetterI, className: "i" },
            { id: "4", imageSrc: LetterI2, className: "i2" },
            { id: "5", imageSrc: LetterO, className: "o" },
        ],
        container: [],
    });
    const [activeId, setActiveId] = useState(null);
    const [message, setMessage] = useState("They ruined my word, help me solve it! Use pen");
    const [showButton, setShowButton] = useState(false);
    const [, setLocation] = useLocation();

    // Initialize sensors
    const sensors = useSensors(
        useSensor(TouchSensor),
        useSensor(MouseSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    useEffect(() => {
        if (items.root.length === 0 && items.container.length === 5) {
            setMessage("Hello hello! You helped me! My name is Mika. Tap to see my Edurino friends!");

                setShowButton(true);

        } else {
            setMessage("They ruined my word, help me solve it! Use pen");
            setShowButton(false);
        }
    }, [items]);

    function findContainer(id) {
        if (id in items) {
            return id;
        }
        return Object.keys(items).find((key) =>
            items[key].some((item) => item.id === id)
        );
    }

    function handleDragStart(event) {
        const { active } = event;
        setActiveId(active.id);
    }

    function handleDragOver(event) {
        const { active, over, draggingRect } = event;
        if (!over) return;
        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over.id);
        if (!activeContainer || !overContainer || activeContainer === overContainer) {
            return;
        }
        setItems((prev) => {
            const activeItems = [...prev[activeContainer]];
            const overItems = [...prev[overContainer]];
            const activeIndex = activeItems.findIndex((item) => item.id === active.id);
            const overIndex = overItems.findIndex((item) => item.id === over.id);

            let newIndex;
            if (over.id in prev) {
                newIndex = overItems.length;
            } else {
                const isBelowLastItem =
                    over && overIndex === overItems.length - 1 && draggingRect?.offsetTop > over.rect.offsetTop + over.rect.height;
                newIndex = isBelowLastItem ? overIndex + 1 : overIndex;
            }

            const movedItem = activeItems[activeIndex];
            activeItems.splice(activeIndex, 1);
            overItems.splice(newIndex, 0, movedItem);

            return {
                ...prev,
                [activeContainer]: activeItems,
                [overContainer]: overItems,
            };
        });
    }

    function handleDragEnd(event) {
        const { active, over } = event;
        const activeContainer = findContainer(active.id);
        const overContainer = findContainer(over?.id);
        if (!activeContainer || !overContainer || activeContainer !== overContainer) {
            return;
        }
        const activeIndex = items[activeContainer].findIndex((item) => item.id === active.id);
        const overIndex = items[overContainer].findIndex((item) => item.id === over.id);
        if (activeIndex !== overIndex) {
            setItems((items) => ({
                ...items,
                [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex),
            }));
        }
        setActiveId(null);
    }

    const handleButtonClick = () => {
        setLocation('/choose');
    };

    return (
        <div style={wrapperStyle}>
            <div className='speechBox'>
                <div className={"speech1"}>
                    {message}
                </div>
            </div>

            <img className={"mikaPfp"} src={mikaPfp} alt='Mika Profile'/>

            <div className='cloudContainer'>
                <img className={"cloud1"} src={cloud} alt='Cloud'/>
            </div>

            <div>
                <img className={"badGuy"} src={badGuy} alt='Bad Guy'/>
                <img className={"badGuy1"} src={badGuy} alt='Bad Guy'/>
                <img className={"badGuy2"} src={badGuy} alt='Bad Guy'/>
                <img className={"badGuy3"} src={badGuy} alt='Bad Guy'/>
                <img className={"badGuy4"} src={badGuy} alt='Bad Guy'/>
            </div>

            {showButton && (
                <>
                    <div className="darkOverlay"></div>
                    <button className="tap-button" onClick={handleButtonClick}>
                        <img src={tapButton} alt="Tap Here"/>
                    </button>
                </>
            )}


            <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDragStart={handleDragStart}
            >
                <Container id="root" items={items.root}/>
                <Container id="container" items={items.container}/>
                <DragOverlay>
                    {activeId ? (
                        <Item
                            id={activeId}
                            imageSrc={
                                items.root.find((item) => item.id === activeId)?.imageSrc ||
                                items.container.find((item) => item.id === activeId)?.imageSrc
                            }
                        />
                    ) : null}
                </DragOverlay>
            </DndContext>

        </div>
    );
}
