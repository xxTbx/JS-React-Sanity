/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { getCourses, getCoursesByCategory } from '../lib/services/service'
import CourseList from './CourseList'
import '../styles/css/course.css'

const categories = [
  'Marketing',
  'Photoshop',
  'Code',
  'Video',
  'Analytics',
  'Web',
  'Design',
  'Empty',
]

export default function Courses() {
  // TODO: Add nøvendig logikk
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(false)
  const [empty, setEmpty] = useState(true)

  useEffect(() => {
    const getCoursesData = async() => {
        setLoading(true)
        const data = await getCourses()
        setLoading(false)
        setCourses(data)
    }
    getCoursesData()
}, [])

  const handleFilter = async (e) => {
    const category = e.target.value
    let data
    if (empty === false) {
      setEmpty(!empty)
    }
    if (category === 'Empty') {
      setEmpty(!empty)
      data = null
    } 
    else if (category === 'Alle') {
      data = await getCourses()
    } else {
      data = await getCoursesByCategory(category)
      console.log(category)
    }
    setCourses(data)
  }

if (loading) {
    return <p>Loading ...</p>
}
  console.log(courses)
  return (
    <>
      <header>
        <h2 data-testid="title">Alle kurs</h2>
          <label htmlFor="filter">
            <span>Velg kategori:</span>
            <select id="filter" name="filter" data-testid="filter" onChange={handleFilter}>
                <option value="Alle">Alle</option>
{/* TODO: Legg til flere kategorier - sjekk mappen data */}
              {categories?.map((subject) => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </label>
      </header>
      <section data-testid="courses" className='courses'>
        {/* TODO: Vis alle kurs */}
        {empty ? (
          <article data-testid="course_wrapper">
            {courses?.map((course) => (
                <CourseList 
                  key={course?._id}
                  title={course?.Title}
                  slug={course?.Slug}
                  description={course?.Description}
                  category={course?.Category}   
                />
            ))}
          </article>
        ) : (
          <>
          {/* TODO: Vis hvis ingen kurs / ingen kurs på en gitt kategori */}
          <p data-testid="empty">Ingen kurs</p>
          </>
        )}
      </section>
    </>
  )
}