import {
    useState
} from "react";

export const CommentSection = (props) => {
    const [comments, setComments] = useState([]);
    const [currentComment, setCurrentComment] = useState("");

    return (
        <div className={"comment_section"}>
            <div className={"comments"}>
                {comments?.map((comment, index) => (
                    <p key={"shutUpaboutkeys_" + index}>{comment}</p>
                ))}
            </div>
            <textarea
                value={currentComment}
                onChange={(e) => setCurrentComment(e.target.value)}></textarea>
            <button
                onClick={() => {
                    setComments([...comments, currentComment]);
                    setCurrentComment("");
                }}>Add
                comment
            </button>
        </div>
    )
}