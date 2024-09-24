import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TDailyAdvice, TDailyAdvices } from "@/types";

const RandomAdvice = () => {
  const dailyAdvices: TDailyAdvices = [
    {
      _id: "rewn123",
      question: "What is the banifites of reading book",
      answer: "Book is so benifites that",
    },
    {
      _id: "rewn123e",
      question: "What is the banifites of reading book",
      answer: "Book is so benifites that",
    },
    {
      _id: "renw4123",
      question: "What is the basnifites of reading book3",
      answer: "Book is so benifites that3",
    },
    {
      _id: "resrn123",
      question: "What is sthe banifites of reading book3",
      answer: "Book is so benifites that3",
    },
    {
      _id: "rens123",
      question: "What is the banifites of reading book3e",
      answer: "Book is so benifites that3",
    },
  ];
  return (
    <>
      <Card className="w-full mb-5">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Daily Advice</CardTitle>
          <CardDescription>Advice that should change you life</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {dailyAdvices.slice(0, 5).map((advice: TDailyAdvice, index) => (
              <AccordionItem key={index} value={advice?._id}>
                <AccordionTrigger className="text-start">
                  {advice?.question}
                </AccordionTrigger>
                <AccordionContent>{advice?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
};

export default RandomAdvice;
