import { useEffect, useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Image } from "./types/types";

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const getImagesData = async () => {
      try {
        if (!query) return;

        setIsLoading(true);
        const { results, total_pages } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
        setTotalPages(total_pages);
        setError("");
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getImagesData();
  }, [query, page]);

  const handleChangeQuery = (newQuery: string) => {
    if (query === newQuery) return;
    setImages([]);
    setQuery(newQuery);
    setPage(1);
    setError("");
  };

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const openModal = (image: Image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <SearchBar onSearchChanged={handleChangeQuery} />
      <main>
        {error && <ErrorMessage message={error} />}
        <ImageGallery images={images} onImageClick={openModal} />
        {isLoading && <Loader />}
        {!isLoading && page < totalPages && <LoadMoreBtn onClick={loadMore} />}
        {selectedImage && (
          <ImageModal
            isOpen={isModalOpen}
            image={selectedImage}
            onClose={closeModal}
          />
        )}
      </main>
    </div>
  );
}

export default App;
