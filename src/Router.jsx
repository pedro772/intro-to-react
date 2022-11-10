import { Routes, Route } from 'react-router-dom';

import ComponentTypes from './pages/ComponentTypes'
import ShowcaseMount from './pages/showcaseMount';
import ShowcaseUpdate from './pages/showcaseUpdate';
import ShowcaseUnmount from './pages/showcaseUnmount';

export default function Router() {
  return (
    <Routes>
      <Route 
        path='/'
        element={<ComponentTypes name={{class: "classe", function: "função"}} />}
      />

      <Route 
        path='/mount'
        element={<ShowcaseMount name="classe" />}
      />

      <Route 
        path='/update'
        element={<ShowcaseUpdate name="classe" />}
      />

      <Route 
        path='/unmount'
        element={<ShowcaseUnmount name="classe" />}
      />
    </Routes>
  )
}
