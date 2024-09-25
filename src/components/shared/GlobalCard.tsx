import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TGlobalCardProps } from "@/types";

const GlobalCard: React.FC<TGlobalCardProps> = ({
  cardTitle,
  cardDescription,
  cardContent,
  children,
  ...rest
}) => {
  return (
    <Card className={`w-full mb-5 ${rest.className || ""}`}>
      <CardHeader className="text-center">
        {cardTitle && <CardTitle className="text-2xl">{cardTitle}</CardTitle>}
        {cardDescription && (
          <CardDescription>{cardDescription}</CardDescription>
        )}
      </CardHeader>
      {cardContent && <CardContent>{cardContent}</CardContent>}
      {children}
    </Card>
  );
};

export default GlobalCard;
