import React, { useState } from 'react'
import './Header.css'

function Multimedia() {

    const videos = [
        {
            title: "Maldives Paradise",
            poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            src: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            title: "Paris Adventure",
            poster: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
            src: "https://www.w3schools.com/html/movie.mp4"
        },
        {
            title: "Tokyo Journey",
            poster: "https://images.unsplash.com/photo-1548013146-72479768bada",
            src: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        {
            title: "Bali Highlights",
            poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            src: "https://www.w3schools.com/html/movie.mp4"
        }
    ];

    const [showAll, setShowAll] = useState(false);

    const visibleVideos = showAll ? videos : videos.slice(0, 3);

    return (
        <>
            <div className="video_section_main">
                <h2 className="video_section_heading">🎥 Explore Destinations Through Video</h2>
                <p className="video_section_subheading">
                    Watch our curated travel reels and get inspired for your next adventure!
                </p>

                <div className="video_container">
                    {visibleVideos.map((video, index) => (
                        <div className="video_card" key={index}>
                            <video controls poster={video.poster}>
                                <source src={video.src} type="video/mp4" />
                            </video>
                            <h4>{video.title}</h4>
                        </div>
                    ))}
                </div>

                {/* MORE BUTTON */}
                {videos.length > 3 && (
                    <button
                        className="more_video_btn"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less" : "More Videos"}
                    </button>
                )}
            </div>
        </>
    )
}

export default Multimedia;
