import Page from './Components/Page';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      {/* Navbar fixed at the top of the screen */}
      <Navbar className="fixed z-50 top-0 left-0 right-0 w-full" />

      {/* Ensure content does not overlap with the fixed navbar by adding padding */}
      <div className="pt-[80px]"> {/* Adjust padding according to your navbar height */}
        <Page />
      </div>
    </div>
  );
}

export default App;
