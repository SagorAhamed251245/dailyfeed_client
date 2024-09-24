import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { BadgeComponent } from "./ClientComps";

const RecommendedTopic = () => {
  const recommendedTopics: string[] = [
    "IT Firm",
    "US Latest",
    "JavaScript",
    "ReactJS",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Front-End Frameworks",
    "Back-End Development",
    "APIs and Microservices",
    "Cloud Computing",
    "DevOps",
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
    "Blockchain",
    "Data Science",
    "Mobile App Development",
    "User Interface (UI) Design",
    "User Experience (UX) Design",
    "Software Engineering",
    "Agile Methodology",
  ];

  return (
    <Card className="w-full mb-5">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Recommended Topic</CardTitle>
        <CardDescription>
          Explore the topic that we Recommended you
        </CardDescription>
      </CardHeader>
      <CardContent>
        <BadgeComponent recommendedTopics={recommendedTopics} />
      </CardContent>
    </Card>
  );
};

export default RecommendedTopic;
