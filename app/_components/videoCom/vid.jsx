'use client';

import React, { useEffect, useRef } from 'react';

const TikTokEmbed = ({ videoUrl }) => {
  const embedRef = useRef(null);

  useEffect(() => {
    const scriptId = 'tiktok-embed';

    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.tiktokEmbedLoad) {
      window.tiktokEmbedLoad();
    }
  }, []);

  // Extract the video ID from the URL
  const getVideoId = (url) => {
    const match = url.match(/\/video\/(\d+)/);
    return match ? match[1] : '';
  };

  const videoId = getVideoId(videoUrl);

  return (
    <div
      ref={embedRef}
      className="w-full aspect-square mx-auto "
    >
      <blockquote
        className="tiktok-embed"
        cite={videoUrl}
        data-video-id={videoId}
        style={{ width: '100%', height: '100%' }}
      >
        <section></section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;
