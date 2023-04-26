import "./Gallery.css"
import Background from "../../UI/Background"
import React from 'react'

const Gallery = () => {
  return (
      <section className="gallerySection">
    <Background className="galleryBg">
    <h2 className="galleryHeading">Gallery</h2>
    <div class="row">
        <div class="column">
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/1.jpg"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/2.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/3.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/4.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/5.jpg?raw=true"
                    alt="" class="gallery-img" />
    
            </div>
        </div>
        <div class="column">
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/6.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/7.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/8.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/9.jpg?raw=true"
                    alt="" class="gallery-img" />
    
            </div>
        </div>
        <div class="column">
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/10.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/11.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/12.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/13.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
        </div>
        <div class="column">
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/15.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/16.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/17.jpg?raw=true"
                    alt="" class="gallery-img" />
            </div>
            <div class="img-wrapper">
                <img src="/assets/GalleryImages/15.jpg?raw=true"
                    alt="" class="gallery-img" />
    
            </div>
        </div>
    </div>
</Background>
</section>
  )
}

export default Gallery;