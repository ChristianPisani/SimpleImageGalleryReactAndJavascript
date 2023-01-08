import {
    useEffect,
    useState
} from "react";
import {
    ImageModal
} from "./ImageModal";

export const ImageGallery = (props) => {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [currentImage, setCurrentImage] = useState();
    const [filter, setFilter] = useState("");
    
    const fetchImages = async () => {
        const fetchedImages = await fetch(`https://api.unsplash.com/photos?client_id=26c22dbaf3df569f2704283a647173f071f9a45d3c870ee216aac157278f474a&page=${page}`);
        const json = await fetchedImages.json();
        setImages([...images, ...json]);
        console.log(json)
    }

    useEffect(() => {
        fetchImages();
    }, [page]);

    return (
        <>
            <input type={"text"} placeholder={"Filter"} onChange={(e) => setFilter(e.target.value)} />
            <div
                className={"image_gallery"}>
                {images.map((image, index) => (
                    <div key={"keykeykeykeky_" + index} className={(image["alt_description"] ?? "").toLowerCase().includes(filter) ? "visible" : ""} >
                        <img
                            onClick={() => setCurrentImage(image)}
                            src={image.urls.regular}/>
                        <p>{image["alt_description"]}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={() => setPage(page + 1)}>Next
                page
            </button>
            {currentImage && <ImageModal onClose={() => setCurrentImage(undefined)} image={currentImage}></ImageModal>}
        </>
    )
}