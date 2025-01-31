import Image from "next/image"

interface PersonalProjectProps {
  title: string
  description: string
  imageUrl: string
}

export default function PersonalProject({ title, description, imageUrl }: PersonalProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} width={400} height={300} className="w-full" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

