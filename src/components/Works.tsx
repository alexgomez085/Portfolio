import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const cinematicVideos = [
  { id: 'iJ5OlSKVEYE', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_b111d4f4-d762-464a-9194-94639c1b800d/lg' },
  { id: '9f-GahRxRvE', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_3f272240-78ca-4f2b-8279-5a09d46f6b49/lg' },
  { id: 'X01IeMzyhjU', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_a261a8e8-a8db-4916-b957-a12e6a64874d/lg' },
  { id: 'DzMGx867Su4', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_f44ee2b1-652e-4410-8aed-90890f655faa/lg' },
];

const shortVideos = [
  { id: 'rPdwe4uJ-aU', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_b2449dd5-7140-42f8-9f46-40183ea98d33/lg' },
  { id: 'P38t6azPXVQ', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_78ebb2dd-844c-4475-867a-0350725752d7/lg' },
  { id: 'WNzaFssmZ0c', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_7c1c823d-dd9d-43fb-b28a-39926a2c4e24/lg' },
  { id: 'eAJZLRPDOH4', thumb: 'https://onecdn.io/video-thumbnail/2ac5fc67-0d10-485c-95db-0dfbd7abf3e1_6a64e426-ffe3-44d4-8c9c-4dbc150995c8/lg' },
];

export default function Works() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="works" className="py-24 px-6 md:px-12 bg-[#FDFBF7] dark:bg-[#121212] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Video<br/>Projects</h2>
        </div>

        {/* Cinematic Videos (16:9) */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wider text-gray-400 dark:text-gray-500 transition-colors duration-300">Cinematic Edits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cinematicVideos.map((video, i) => (
              <motion.div 
                key={i}
                onClick={() => setSelectedVideo(video.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block relative overflow-hidden rounded-2xl aspect-video bg-[#232021] cursor-pointer"
              >
                <img 
                  src={video.thumb} 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Short-form Videos (9:16) */}
        <div>
          <h3 className="text-2xl font-bold mb-8 uppercase tracking-wider text-gray-400 dark:text-gray-500 transition-colors duration-300">Short-form Content</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {shortVideos.map((video, i) => (
              <motion.div 
                key={i}
                onClick={() => setSelectedVideo(video.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block relative overflow-hidden rounded-2xl aspect-[9/16] bg-[#232021] cursor-pointer"
              >
                <img 
                  src={video.thumb} 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 rounded-full p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
