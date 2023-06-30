import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// Add react-router-dom imports

// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root></Root>}>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/:type' element={<HomePage></HomePage>}></Route>
    <Route path='/:type/:id' element={<PetDetailsPage></PetDetailsPage>}></Route>
    <Route path='/search' element={<SearchPage></SearchPage>}></Route>
    <Route path='/pet-details-not-found' element={<PetDetailsNotFound></PetDetailsNotFound>}></Route>
  </Route>
));

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default App;
