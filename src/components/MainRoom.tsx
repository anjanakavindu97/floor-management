import React, {useState} from 'react';
import { useDrop } from 'react-dnd';
import { Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'

const ItemType = {
  IMAGE: 'image',
};

interface DroppedImage {
  src: string;
  alt: string;
  x: number;
  y: number;
}

const MainRoom = () => {

  const [droppedImages, setDroppedImages] = useState<DroppedImage[]>([]);
  
  const [, drop] = useDrop(() => ({
    accept: ItemType.IMAGE,
    drop: (item: { src: string; alt: string }, monitor) => {
      const offset = monitor.getClientOffset(); // Get drop position in screen coordinates
      if (offset) {
        const dropTarget = document.getElementById('drop-area');
        if (dropTarget) {
          const dropRect = dropTarget.getBoundingClientRect(); // Get Paper boundaries

          const x = offset.x - dropRect.left; // Relative X coordinate
          const y = offset.y - dropRect.top;  // Relative Y coordinate

          // Ensure the image stays within bounds
          const adjustedX = Math.max(0, Math.min(x, dropRect.width - 100)); // Prevent overflow on X
          const adjustedY = Math.max(0, Math.min(y, dropRect.height - 100)); // Prevent overflow on Y

          setDroppedImages((prev) => [
            ...prev,
            { src: item.src, alt: item.alt, x: adjustedX, y: adjustedY },
          ]);
        }
      }
    },
  }));

  return (
    <Paper
    id="drop-area"
    ref={drop}
    style={{
        height: '80vh',
        marginTop: '16px',
        position: 'relative',
        backgroundImage: 'radial-gradient(circle, #e3e2e2 1px, transparent 1px)',
        backgroundSize: '15px 15px',
    }}>
      {droppedImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            left: `${image.x}px`,
            top: `${image.y}px`,
          }}
        />
      ))}
    </Paper>
  );
};

// const MainRoom = () => {
  
//   const onDragEnd = (result: any) => {
//   };

//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId="droppable">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             <Paper style={{ height: '80vh', marginTop: '16px' }}>

//             </Paper>
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

export default MainRoom;
