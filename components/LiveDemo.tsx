import RollingGallery from "./ui/RollingGallery"

export default function LiveDemoCards() {
  return (
    <div className="space-y-8 ">
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  )
}

