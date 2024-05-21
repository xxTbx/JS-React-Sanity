/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUser, getCourseBySlug } from '../lib/services/service'
import Lesson from './Lesson'
import '../styles/css/courseSite.css'


export default function Course() {
    // TODO: Add nøvendig logikk
    const { slug } = useParams()
    const [course, setCourse] = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(true)
    const [lesson, currentLesson] = useState('')
  
    useEffect(() => {
      const getCourseData = async() => {
          setLoading(true)
          const userData = await getUser()
          const courseData = await getCourseBySlug(slug)
          setLoading(false)
          setUsers(userData)
          setCourse(courseData)
      }
      getCourseData()
  }, [slug])
  
  if (loading) {
      return <p>Loading ...</p>
  }

  const handleChange = async(e) => {
    currentLesson(e.target.value)
    if (show === false) {
      setShow(!true)
    } else {
      setShow(!show)
    }
  }
    return (
      <div id="wrapper">
        <aside>
          <h3>Leksjoner</h3>
          <ul data-testid="lessons">
            {/* TODO: Vis alle leksjoner til kurset */}
            {course?.Lessons?.map((lesson) => (
              <li key={lesson?._id} >
                <button
                  data-testid="lesson_url" 
                  className='lessonBtn'
                  value={lesson?.Slug}
                  data-slug={lesson?.Slug}
                  onClick={e => handleChange(e)} 
                > 
                  {lesson?.Title}
                </button>
                {/* <Link to={`/Kurs/${slug}/${lesson?.Slug.current}`}>
                  <p>{lesson?.Title}</p>
                </Link> */}
              </li>
            ))}
          </ul>
        </aside>
        <section id="textField">
          {/* TODO: START - Vis kun om vi er på /kurs/kurs-slug ikke når vi er på /kurs/kurs-slug/leksjons-slug */}
          {show ? (
            <>
              <h2 data-testid="course_title">{course?.Title}</h2>
              <p data-testid="course_description">{course?.Description}</p>
            </>
          ) : ( 
            <>
          {/* TODO: SLUTT */}
          {/* TODO: Vis leksjonens innhold her. HINT: Sjekk React Router Outlet */}
              <Lesson 
              title={course?.Title}
              category={course?.Category}
              slug={course?.Slug}
              lesson={lesson}
              />
            </>
          )}
        </section>
        <aside data-testid="enrollments">
          <h3>Deltakere</h3>
          <ul data-testid="course_enrollments">
            {/* TODO: Vis alle deltakere (se mappen data) */}
            {users?.map((user) => (
              <li key={user?._id}>
                {user?.name}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    )
  }