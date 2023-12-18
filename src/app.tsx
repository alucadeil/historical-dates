import { ThemeProvider } from 'styled-components';
import EventView from './widgets/eventView';
import { theme } from './shared/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <EventView />
    </ThemeProvider>
  );
};

export default App;