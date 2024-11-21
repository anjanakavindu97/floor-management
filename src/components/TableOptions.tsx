import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { useDrag } from 'react-dnd';

const ItemType = {
  IMAGE: 'image',
};

const DraggableImage = ({ src, alt }: { src: string; alt: string }) => {
  const [, drag] = useDrag(() => ({
    type: ItemType.IMAGE,
    item: { src, alt },
  }));

  return (
    <img
      ref={drag}
      src={src}
      alt={alt}
      style={{ width: '100px', height: '100px', margin: '8px', cursor: 'grab' }}
    />
  );
};

const TableOptions = () => {
  return (
    <Paper style={{ padding: '20px', marginTop: '16px' }}>
      <Typography variant='h6' align='center'>Table Options</Typography>
      <Typography variant='subtitle2' align='center'>Drag and drop your table</Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <DraggableImage src='/assets/Table.svg' alt='table1' />
        <DraggableImage src='/assets/Mid.svg' alt='table2' />
      </div>
    </Paper>
  );
};

// const TableOptions = () => {
//   return (
//     <Paper style={{ padding: '20px', marginTop: '16px' }}>
//       <Typography variant='h6' align='center'>Table Options</Typography>
//       <Typography variant='subtitle2' align='center'>Drag and drop your table</Typography>
//       <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
//         <img src='/assets/Table.svg' alt='table1' style={{ width: '100px', height: '100px', marginRight: '16px' }} />
//         <img src='/assets/Mid.svg' alt='table2' style={{ width: '100px', height: '100px' }} />
//       </div>
//     </Paper>
//   );
// };

export default TableOptions;