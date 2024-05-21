/* eslint-disable prettier/prettier */
import client from './client'

/* "lesson" ide hentet fra link 8 */
const fieldsCourses = `
_id,
Title,
"Slug": Slug.current,
Description,
"Lessons": *[_type=='lesson']{ 
  _id,
  Title,
  "Slug": Slug.current,
  Preamble,
  Text,
  Order,
},
Category,
`
// Courses
export async function getCourses() {
    const data = await client.fetch(`*[_type == "course"]{${fieldsCourses}}`)
    return data
  }

export async function getCoursesByCategory(category) {
    const data = await client.fetch(
      `*[_type == "course" && Category==$category]{${fieldsCourses}}`,
      { category }
    )
    return data
  }

// Course
const fieldsCourse = `
_id,
Title,
"Slug": Slug.current,
Description,
"Lessons": *[_type=='lesson']{ 
  _id,
  Title,
  "Slug": Slug.current,
  Preamble,
  Text,
  Order,
},
Category,
`
export async function getCourseBySlug(slug) {
  const data = await client.fetch(
    `*[_type == "course" && Slug.current == $slug]{${fieldsCourse}}`,
    { slug }
  )
  return data?.[0]
}

const fieldsLesson = `
_id,
Title,
"Slug": Slug.current,
Preamble,
Text,
Order,
`
// Lessons
export const getLesson = async () => {
  const data = await client.fetch(
    `*[_type == "lesson"]{${fieldsLesson}}`);
  return data;
}

export const getLessonBySlug = async (lesson) => {
  const data = await client.fetch(
    `*[_type == "lesson" && Slug.current == $lesson]{${fieldsLesson}}`,
    { lesson }
  )
  return data?.[0]
}

// SignUp
const fieldsUsers = `
_id,
name,
email,
`
export const getUser = async () => {
    const data = await client.fetch(`*[_type == "user"]{${fieldsUsers}}`);
    return data;  
}

export const createContact = async (body) => {
  
  try {
    await client.create({ _type: 'user', ...body })
  } catch (error) {
    throw new Error(error)
  }
}

// Comment
const fieldsUsers2 = `
_id,
createdBy,
comment,
`
export const getComment = async () => {
  const data = await client.fetch(`*[_type == "comment"]{${fieldsUsers2}}`);
  return data;  
}

export const createContactTwo = async (bodyOne) => {
  
  try {
    await client.create({ _type: 'comment', ...bodyOne, })
  } catch (error) {
    throw new Error(error)
  }
}