/* eslint-disable prettier/prettier */
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import SignUp from './components/SignUp';
import Course from './components/Course';
import Lesson from './components/Lesson';
import Courses from './components/Courses';
import Create from './components/Create';
import Error from './components/Error';
import Footer from './components/Footer';
import Nav from './components/Nav';

export default function App() {
  // TODO: Add nÃ¸vendig logikk
  const [activeUser, holdActiveUser] = useState('')
  const handleUser = (userName) => {
    holdActiveUser(userName)
  }
  return (
    <div data-testid="layout">
      <header>
        <nav>
          <Nav />
        </nav>
      </header>
      <main className="h-full">
        {/* TODO: Oppsett for React Router kommer her */}
        <Routes>
          <Route path="/">
            <Route index element={<SignUp handleUser={handleUser} />} />
          </Route>
          <Route path="Kurs">
            <Route index element={<Courses />} />
            <Route path=":slug" element={<Course />} />
          </Route>
          <Route path="Kurs/:slug">
            <Route index element={<Course />} />
            <Route path=":slug" element={<Lesson />} />
          </Route>
          <Route path="Ny">
            <Route index element={<Create />} />
          </Route>
            <Route path='*' element={<Error />} />{/* tatt fra Link 7 */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer> 
    </div>
  )
}

// 1. https://www.sanity.io/docs/reference-type
// 2. https://www.sanity.io/docs/how-queries-work
// 3. https://www.youtube.com/watch?v=NO7_jgzVgbc&t=145s
// 4. https://xn--fullstkk-o0a.no/
// 5. https://github.com/mariuswallin/UIN_2022
// 6. https://v5.reactrouter.com/web/api/Route
// 7. https://www.youtube.com/watch?v=P5xgsRIKJjo
// 8. https://www.youtube.com/watch?v=jtzC4tx3III