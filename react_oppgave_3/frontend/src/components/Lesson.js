/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import { getLessonBySlug, createContactTwo, getComment } from '../lib/services/service';
import CommentList from './CommentList'

export default function Lesson( {
  title,
  category,
  slug,
  lesson,
} ) {
  // TODO: Add nøvendig logikk
  const [currentLesson, setCurrentLesson] = useState([])
  const [loading, setLoading] = useState(false)

  // Comment
  const [createdBy, setCreatedBy] = useState('')
  const [comment, setComment] = useState('')
  const [commented, getCommentedData] = useState([])
  const [errorMessage, setErrorMessage] = useState('')  
  const [rightMessage, setRightMessage] = useState('')

  useEffect(() => {
    const getLessonData = async() => {
        setLoading(true)
        const data = await getLessonBySlug(lesson)
        const commentData = await getComment();
        setLoading(false)
        setCurrentLesson(data)
        getCommentedData(commentData)
    }
    getLessonData()
}, [lesson])

if (loading) {
  return <p>Loading ...</p>
}

  // endringer på input
  const handleChangeName = (e) => {
    setCreatedBy(e.target.value)
   
  }
  const handleChangeMessage = (e) => {
    setComment(e.target.value)
  }

  // handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    validate({createdBy, comment})
  }

  const validate = async(data) => {
    if(createdBy.length && comment.length > 0) {
      await createContactTwo(data)
      setErrorMessage('')
      setRightMessage('Skjema er sendt')
      return data; 
    }
    else {
      setErrorMessage('fyll ut alle felter med *')
      setRightMessage('')
    }
  }

console.log(currentLesson)
  return (
    <div>
      <div id="topText">
        <h3 data-testid="course_title">
        <a href={`/Kurs/${slug}`}>{title}</a>
        </h3>
        <h3 data-testid="course_category">
          Kategori: <span>{category}</span>
        </h3>
      </div>
      <h2 data-testid="lesson_title">{currentLesson?.Title}</h2>
      <p data-testid="lesson_preAmble">{currentLesson?.Preamble}</p>
      {/* TODO: Liste opp tekster */}
      {currentLesson?.Text?.map((avsnitt) => (
        <div data-testid="lesson_text" key={avsnitt?._key}>
          {avsnitt?.Text}
        </div>
      ))}
      <section data-testid="comments">
        <h4>Kommentarer ({commented.length})</h4>
        <form data-testid="comment_form" noValidate onSubmit={handleSubmit}>
          <label htmlFor="name">
            <span>Navn*</span>
            <input data-testid="form_name" type="text" name="name" id="name" value={createdBy} onChange={handleChangeName}/>
          </label>
          <label htmlFor="comment">
            <span>Legg til kommentar*</span>
            <textarea
                data-testid="form_textarea"
                type="text"
                name="comment"
                id="comment"
                value={comment} 
                onChange={handleChangeMessage}
                cols="30"
              />
          </label>
          <button data-testid="form_submit" type="submit">
            Legg til kommentar
          </button>
          {/* TODO: Vise ved feil */}
          {/* TODO: Vise ved suksess */}
          {errorMessage}
          {rightMessage}
        </form>
        {/* TODO: Liste opp kommentarer */}
        <ul data-testid="comments_list">
            {commented?.map((comments) => (
                <CommentList
                key={comments?._id}
                createdby={comments.createdBy}
                commentss={comments.comment}
                />
            ))}
          </ul> 
      </section>
    </div>
  )
}