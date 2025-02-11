import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  id: string
  name: string
  period: string
  category: string
  thumbnail: string
}

export function ProjectCard({ id, name, period, category, thumbnail }: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="p-0">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={name}
            width={400}
            height={200}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg mb-2">{name}</CardTitle>
          <div className="flex justify-between items-center">
            <Badge variant="secondary">{category}</Badge>
            <span className="text-sm text-gray-500">{period}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

