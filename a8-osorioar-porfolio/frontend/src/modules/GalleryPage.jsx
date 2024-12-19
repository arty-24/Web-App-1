import { useState } from 'react';

function GalleryPage() {
  const images = [
    {
      filepath: '/src/assets/Cat-Picture.jpg',
      caption: 'Two of my favorite things in one picture. Cats and nature! ',
      title: '&copy; 2022 Van Londen',
    },
    {
      filepath: '/src/assets/Computer.jpg',
      caption: 'One of my favorite things I have accomplished is building my first computer in Summer 2022!',
      title: '&copy; 2022 Van Londen',
    },
    {
      filepath: '/src/assets/Delray-Beach.png',
      caption: 'Apple night mode makes this photo of Delray Beach, FL look like it was taken at dusk, but it was actually taken at 3 am when it was pitch black outside!',
      title: '&copy; 2022 Van Londen',
    },
    {
      filepath: '/src/assets/Tesla-Picture.jpg',
      caption: 'Driving my Tesla is one of my favorite hobbies!',
      title: '&copy; 2022 Van Londen',
    },
    {
      filepath: '/src/assets/IMG_3860.jpg',
      caption: 'Stunning landscape photo that is also the background for my webpage.',
      title: '&copy; 2022 Van Londen',
    },
  ];

  return (
    <>
      <h2>Gallery Page</h2>
      <p>
        These images have previously been used in my other web development
        projects!
      </p>

      <article className="gallery">
        {images.map((image, index) => (
          <figure key={index}>
            <img
              src={image.filepath}
              alt={image.caption}
              title={image.title}
            />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </article>
    </>
  );
}

export default GalleryPage;
