import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  className?: string;
}

export default function ImageGallery({ images, title, className = '' }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const nextModalImage = useCallback(() => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevModalImage = useCallback(() => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Open modal with specific image
  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    setIsLoading(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  // Close modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setIsLoading(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevModalImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextModalImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen, closeModal, prevModalImage, nextModalImage]);

  // Handle touch gestures for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      if (isModalOpen) {
        nextModalImage();
      } else {
        nextImage();
      }
    }
    if (isRightSwipe) {
      if (isModalOpen) {
        prevModalImage();
      } else {
        prevImage();
      }
    }
  };

  // Handle image load in modal
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Handle modal backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div className={`w-full ${className}`}>
        {/* Main Image Display */}
        <div className="relative mb-6 group">
          <div 
            className="relative cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => openModal(currentImageIndex)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img 
              src={images[currentImageIndex]} 
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Zoom overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4">
                <ZoomIn className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
              
              {/* Image Counter */}
              <div className="absolute top-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
              
              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  openModal(index);
                }}
                className={`flex-shrink-0 w-24 h-18 rounded-xl overflow-hidden border-3 transition-all duration-300 hover:scale-105 ${
                  index === currentImageIndex 
                    ? 'border-blue-400 shadow-lg scale-105' 
                    : 'border-gray-600 hover:border-blue-400'
                }`}
                aria-label={`View image ${index + 1} in full screen`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackdropClick}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Loading Spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            {/* Main Modal Image */}
            <img 
              src={images[modalImageIndex]} 
              alt={`${title} - Image ${modalImageIndex + 1}`}
              className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
                isLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={handleImageLoad}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110 z-10"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevModalImage}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110 z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button 
                  onClick={nextModalImage}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-full transition-all duration-300 shadow-lg hover:scale-110 z-10"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}

            {/* Modal Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm z-10">
                {modalImageIndex + 1} / {images.length}
              </div>
            )}

            {/* Modal Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setModalImageIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === modalImageIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Image Title */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm z-10">
              {title}
            </div>
          </div>

          {/* Instructions for mobile */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center z-10 md:hidden">
            <p>Swipe left/right to navigate • Tap outside to close</p>
          </div>

          {/* Instructions for desktop */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm text-center z-10 hidden md:block">
            <p>Use arrow keys to navigate • Press ESC or click outside to close</p>
          </div>
        </div>
      )}
    </>
  );
}