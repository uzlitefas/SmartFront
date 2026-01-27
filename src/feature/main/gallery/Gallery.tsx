import ARankCourses from "../course/RankCourses";
import GalleryHero from "./GalleryHero";
import GalleryList from "./GelleryList";

function Gallery() {
  return (
    <div>
      <GalleryHero />
      <ARankCourses />
      <GalleryList />
    </div>
  );
}

export default Gallery;
