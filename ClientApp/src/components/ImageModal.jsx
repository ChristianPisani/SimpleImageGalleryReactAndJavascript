import {
    CommentSection
} from "./CommentSection";

export const ImageModal = (props) => {
    return (
        <div
            className={"image_modal"}
            onClick={(e) => {
                if(e.target === e.currentTarget) props.onClose();
            }}>
            <div className={"card"}>
                <img
                    src={props.image.urls.full}/>
                <div
                    className={"image_metadata"}>
                    <h3>{props.image.title ?? "Image title"}</h3>
                    <p>{props.image.description ?? props.image["alt_description"]}</p>
                </div>
                <CommentSection></CommentSection>
            </div>
        </div>
    )
}