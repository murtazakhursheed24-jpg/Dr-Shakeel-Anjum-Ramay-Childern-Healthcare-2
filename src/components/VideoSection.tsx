import { useState } from 'react';
import { VIDEOS } from '../data';
import { Play, ExternalLink, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<typeof VIDEOS[0] | null>(null);

  // We use the Streamable thumbnails API
  // Thumbnail URL pattern: https://thumbs.east.streamable.com/thumb/[id].jpg
  const getThumbnail = (id: string) => `https://streamable.com/t/${id}/poster.jpg`; // A generic streamable poster, or we can use the video id if known.
  // Actually streamable doesn't have a perfectly predictable thumbnail URL without oEmbed.
  // We'll use a clean fallback with a gradient and play button if image fails, or use placeholder.
  
  return (
    <section id="videos" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-600 bg-blue-100 border border-blue-200 rounded-full w-max">
            VIDEO GALLERY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
            Clinic & Doctor Video Gallery
          </h2>
          <p className="text-lg text-slate-600">
            Learn more about our services, clinic environment, and child healthcare guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="group bg-white rounded-lg overflow-hidden border border-slate-200 flex flex-col hover:border-blue-400 transition-colors"
            >
              <div 
                className="relative aspect-video bg-blue-900 overflow-hidden cursor-pointer"
                onClick={() => setActiveVideo(video)}
              >
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-blue-700 opacity-80"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-1 uppercase tracking-wide">{video.title}</h3>
                <p className="text-slate-600 text-xs mb-6 line-clamp-2 flex-grow leading-relaxed">{video.description}</p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <button 
                    onClick={() => setActiveVideo(video)}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Play className="w-3 h-3" /> Watch Video
                  </button>
                  <a 
                    href={video.directUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 bg-slate-50 text-slate-500 rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                    title="Open in Streamable"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog.Root open={!!activeVideo} onOpenChange={(isOpen) => !isOpen && setActiveVideo(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] gap-4 p-4 md:p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            
            {activeVideo && (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="text-xl font-bold text-white">
                    {activeVideo.title}
                  </Dialog.Title>
                  <Dialog.Close className="rounded-full p-2 bg-white/10 text-white hover:bg-white/20 transition-colors">
                    <X className="w-6 h-6" />
                    <span className="sr-only">Close</span>
                  </Dialog.Close>
                </div>
                
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative">
                  <iframe 
                    src={`${activeVideo.embedUrl}&autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; fullscreen"
                    title={activeVideo.title}
                  ></iframe>
                </div>
                
                <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                  <p className="text-slate-300">{activeVideo.description}</p>
                  <a 
                    href={activeVideo.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 bg-white/10 px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Open Externally <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
            
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </section>
  );
}
