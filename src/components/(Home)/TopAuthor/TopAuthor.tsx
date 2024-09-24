"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TopAuthor = () => {
  return (
    <Carousel
      className="w-full max-w-4xl p-0 mx-auto mb-5"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 basis-1/1 lg:basis-1/3 "
          >
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>Author {index + 1}</CardTitle>
                <CardDescription>
                  This is a description for post {index + 1}.
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation for the carousel */}
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default TopAuthor;
