
import { AppProvider } from './context/AppDataContext'
import AppRouter from './AppRouter'

const App = () => {
  return (
      <AppProvider>
          <AppRouter/>
      </AppProvider>
    // <div className="App">
    //   Here will be a demo free and dignified site
    // </div>
  );
}

export default App;
