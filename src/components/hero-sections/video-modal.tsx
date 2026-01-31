import { useRef } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { MdPlayArrow } from "react-icons/md";

interface VideoModalProps {
  videoUrl: string;
}

export function VideoModal({ videoUrl }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild className="size-10 rounded-full text-primary">
        <MdPlayArrow />
      </DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className="overflow-hidden p-0 lg:max-w-5xl"
      >
        <DialogTitle className="hidden" />
        <div className="relative aspect-video w-full">
          <video
            ref={videoRef}
            className="h-full w-full"
            controls
            controlsList="nodownload"
            playsInline
            autoPlay
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
}
