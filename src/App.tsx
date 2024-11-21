import React from 'react';
import { Container, Typography, AppBar, Toolbar, Grid, Button } from '@material-ui/core';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import TableOptions from './components/TableOptions';
import TableDetails from './components/TableDetails';
import MainRoom from './components/MainRoom';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>

        {/* Top Bar */}
        <AppBar position="static" style={{ marginBottom: '16px' }}>
          <Toolbar>
            <Typography variant='h6' style={{ flexGrow: 1, textAlign: 'center' }}>Floor Management</Typography>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
            <Typography variant="h5">Tables</Typography>
            <Button variant="contained">save</Button>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TableOptions />
              <TableDetails />
            </Grid>
            <Grid item xs={9}>
              <MainRoom />
            </Grid>
          </Grid>
        </Container>
      </div>
    </DndProvider>
  );
}

// function App() {
//   return (
//     <div>
//       <AppBar>
//         <Toolbar>
//           <Typography variant='h6' align='center'>Floor Management</Typography>
//         </Toolbar>
//       </AppBar>
//       <Container>
//       <Typography variant="h5" style={{ marginTop: '80px' }}>Manage Your Tables</Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={3}>
//           <TableOptions />
//           <TableDetails />
//         </Grid>
//         <Grid item xs={9}>
//           <MainRoom />
//         </Grid>
//       </Grid>
//       </Container>
//     </div>
//   );
// }

export default App;
