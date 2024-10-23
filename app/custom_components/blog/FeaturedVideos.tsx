import React from 'react';

const videos = [
    {
        platform: 'YouTube',
        id: '3WkF_5M0fos',
        title: 'AYTO TO ΕΡΓΑΛΕΙΟ ΘΑ ΣΟΥ ΑΛΛΑΞΕΙ TH ΖΩΗ',
    },
    {
        platform: 'YouTube',
        id: 'jnl__RvSh4Y',
        title: 'ΑΠΙΣΤΕΥΤΑ ΕΡΓΑΛΕΙΑ AI',
    },
];

const FeaturedVideos = () => {
    return (
        <div className="bg-gray-800 border-gray-700 p-8 rounded-3xl shadow-lg">
            <h1 className="text-sm text-right mb-8 text-white">⠇⠇ Recent Content</h1>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                {videos
                    .filter(video => video.platform === 'YouTube') // Filter out non-YouTube videos
                    .map((video) => {
                        const baseClass = 'VideoItem';
                        const src = `https://www.youtube.com/embed/${video.id}`;

                        return (
                            <div key={video.id} className={`${baseClass} relative pb-[56.25%] h-0 overflow-hidden rounded-md shadow-lg`}>
                                <iframe
                                    src={src}
                                    title={video.title}
                                    frameBorder="0"
                                    allowFullScreen
                                    scrolling="no"
                                    allow="encrypted-media"
                                    className="absolute top-0 left-0 w-full h-full"
                                ></iframe>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default FeaturedVideos;
