import { useDrop } from 'react-dnd';

const DroppableArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: '200px',
        height: '200px',
        border: '2px dashed gray',
        backgroundColor: isOver ? 'lightgreen' : 'white',
      }}
    >
      Drop here
    </div>
  );
};

export default DroppableArea;