import { Home } from "./components/Home";
import {
  ImageGalleryJavascriptOnly
} from "./components/ImageGalleryJavascriptOnly";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    index: false,
    element: <ImageGalleryJavascriptOnly />,
    path: "gallery"
  }
];

export default AppRoutes;
