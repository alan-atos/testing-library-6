import ResponsiveDrawer from './components/ResponsiveDrawer';
import { StyledEngineProvider } from '@mui/material/styles';

// function App() {
//   return (
//     <div>
//       <ResponsiveDrawer />
//     </div>
//   )
// }

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <ResponsiveDrawer />
      </div>
    </StyledEngineProvider>
  )
}




export default App