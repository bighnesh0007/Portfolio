import Image from "next/image"

interface CaseStudyProps {
  title: string
  problem: string
  solution: string
  impact: string
  imageUrl: string
}

export default function CaseStudy({ title, problem, solution, impact, imageUrl }: CaseStudyProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={imageUrl || "/placeholder.svg"} alt={title} width={600} height={400} className="w-full" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Problem:</h4>
            <p>{problem}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Solution:</h4>
            <p>{solution}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Impact:</h4>
            <p>{impact}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

