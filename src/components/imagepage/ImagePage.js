import React from 'react'
import ImageSearch from '../ImageSearch'
import ImageCard from '../imageCard'

const ImagePage = ({setTerm, isLoading, images}) => {
  return (
    <div>
          {" "}
          <div className="container mx-auto">
            <ImageSearch searchText={(text) => setTerm(text)} />

            {!isLoading && images.length === 0 && (
              <h1 className="text-5xl text-center mx-auto mt-32">
                No Images Found
              </h1>
            )}

            {isLoading ? (
              <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {images.map((image) => (
                  <ImageCard key={image.id} image={image} />
                ))}
              </div>
            )}
          </div>
        </div>
  )
}

export default ImagePage