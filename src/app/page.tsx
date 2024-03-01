import { GitHubIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DarkMode from "@/components/ui/dark-mode";
import { Section } from "@/components/ui/section";
import { Views } from "@/components/views";
import { RESUME_DATA } from "@/data/resume-data";
import { Redis } from "@upstash/redis";
import { DownloadIcon, Eye, FlameIcon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

const redis = Redis.fromEnv();
const pageTitle = `${RESUME_DATA.name} | ${RESUME_DATA.about}`

export const metadata: Metadata = {
  title: pageTitle,
  description: RESUME_DATA.summary,
  metadataBase: new URL(RESUME_DATA.url),
  category: 'technology',
  openGraph: {
    type: 'website',
    url: RESUME_DATA.url,
    title: pageTitle,
    description: RESUME_DATA.summary,
    locale: 'en-US',
    siteName: RESUME_DATA.name,
    images: [
      RESUME_DATA.url + RESUME_DATA.ogImage
    ]
  },
  alternates: {
    canonical: './',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: RESUME_DATA.summary,
    images: [
      RESUME_DATA.url + RESUME_DATA.ogImage
    ],
    site: RESUME_DATA.twitter,
    creator: RESUME_DATA.twitter,
  }
};

export default async function Page() {
  const views = await redis.get<number>("pageviews:cv:mukesh");
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
        <div className="flex items-center px-4 pb-6 pt-4 border-b text-center">
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center justify-center text-center pb-2">
              <Image
                src={RESUME_DATA.avatar}
                alt={RESUME_DATA.name}
                width={250}
                height={250}
                className="object-top object-cover rounded-full bg-white h-32 w-32"
              />
            </div>
            <h1 className="text-4xl">{RESUME_DATA.name}</h1>
            <p className="text-pretty text-sm">
              {RESUME_DATA.about}
            </p>
            <p className="items-center text-pretty  text-xs text-muted-foreground pb-3">
              {RESUME_DATA.location}
            </p>
            <span className="flex items-center justify-center gap-1 text-xs text-zinc-500 pb-2">
              <Eye className="w-4 h-4" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views ?? 0,
              )}
            </span>
            <div className=" print:hidden">
              <a href={RESUME_DATA.resume} target="_blank">
                <Button size={"sm"} variant={'default'} className="text-pretty  text-xs">
                  <DownloadIcon className="mr-2 h-4 w-4" /> Resume
                </Button>
              </a>
              <a href={RESUME_DATA.personalWebsiteUrl} target="_blank">
              <Button size={"sm"} variant={'outline'} className="text-pretty  text-xs ml-1">
                <FlameIcon className="mr-2 h-4 w-4" /> Blog
              </Button>
              </a>
              <DarkMode />
            </div>
            <Views slug="/" />
          </div>
        </div>
        <Section className="print:hidden">
          <h2 className="text-xl">Connect</h2>
          <div className="flex gap-x-1 pt-1  text-sm text-muted-foreground print:hidden">
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                className="size-8"
                variant="outline"
                size="icon"
                asChild

              >
                <a aria-label={social.name} href={social.url}>
                  <social.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
        </Section>
        <Section>
          <h2 className="text-xl">Summary</h2>
          <p className="text-pretty  text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl">Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 leading-none">
                      {work.company}
                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant={'outline'}
                            className="align-middle text-xs"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                  </div>

                  <h4 className=" text-sm leading-none">
                    <span className="font-semibold">{work.title}</span> • {work.location}
                  </h4>

                  <div className="text-xs tabular-nums text-gray-500">
                    {work.start} - {work.end}
                  </div>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="leading-none">
                      {education.school}
                    </h3>
                  </div>

                  <div className="text-xs text-gray-500">
                    {education.location}
                  </div>
                  <div className="text-xs text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree} • GPA {education.gpa}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl">Skills</h2>
          <div className="flex flex-wrap gap-1 border p-4 rounded-lg">
            {RESUME_DATA.skills.map((skill) => {
              return <Badge
                className="p-2 text-sm"
                variant="secondary"
                key={skill}
              >{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 px-4">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  organization={project.organization}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  points={project.points}
                />
              );
            })}
          </div>
        </Section>
        <hr></hr>
        <Section className="print:hidden text-center items-center">
          <div className="flex gap-x-1 pt-1 text-sm text-muted-foreground print:hidden">
            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a aria-label={social.name} href={social.url}>
                  <social.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
        </Section>

        <div className=" print:hidden  text-center items-center pb-6">
          <a href="https://github.com/iammukeshm/cv" target="_blank">
            <Button size={"sm"} variant={'default'} className="text-pretty  text-xs">
              <GitHubIcon className="mr-2 h-4 w-4" /> Fork This Repository!
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
