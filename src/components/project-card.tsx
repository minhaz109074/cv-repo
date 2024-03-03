import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface Props {
  title: string;
  organization: string;
  description: string;
  tags: readonly string[];
  points: readonly string[];
  link?: string;
}

export function ProjectCard({ title, organization, description, tags, link, points }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <CardTitle className="text-base pb-2">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}  • <span className=" text-muted-foreground font-light text-sm"> {organization}</span>
          </CardTitle>
          <div className="hidden text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="text-xs">
            <div className="pb-2">
              {description}
            </div>
            <ul className="list-disc">
              {points.map((point) => (
                <li className="ml-4 pb-1" key={point}>{point}</li>
              ))}
            </ul>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex">
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
