interface VideoColumnProps {
    videos: string[];
  }

export function VideoColumn({ videos } : VideoColumnProps): React.JSX.Element {
    return (
        <div className="flex flex-col space-y-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative bg-black p-4 rounded-lg w-96 h-56 group"
            >
              <video
                className="w-full h-full object-cover rounded-lg"
                loop
                autoPlay
                muted
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center text-white text-sm opacity-0 group-hover:opacity-100 bg-black bg-opacity-80 rounded-lg">
                 {video.replace('/video/', '')}
              </div>
            </div>
          ))}
        </div>
      );
}