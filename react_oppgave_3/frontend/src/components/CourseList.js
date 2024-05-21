/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';

/* eslint-disable prettier/prettier */
export default function CourseList( {title, description, category, slug} ) {
    return (
        <div>
            <p>[ {category} ]</p>
            <Link to={`/Kurs/${slug}`}>
            <h3>{title}</h3>
            </Link>
            <p>{description}</p>
            <Link to={`/Kurs/${slug}`}>
                <p>Til Kurs</p>
            </Link>
        </div>
    )
}