/* eslint-disable prettier/prettier */
export default function CommentList({createdby, commentss}) {
    return(
        <div>
            <h5>{createdby}</h5>
            <p>{commentss}</p>
        </div>
    )
}