"use client";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";

type TBadgeComponentProps = {
  recommendedTopics: string[];
};

export const BadgeComponent: React.FC<TBadgeComponentProps> = ({
  recommendedTopics,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);

  return (
    <>
      {recommendedTopics.slice(0, 10).map((topic, index) => (
        <Badge
          key={index}
          onClick={() => setSelectedTopic(index)}
          className="mt-1 ml-1 cursor-pointer"
          variant={selectedTopic === index ? "default" : "secondary"}
        >
          {topic}
        </Badge>
      ))}
    </>
  );
};
