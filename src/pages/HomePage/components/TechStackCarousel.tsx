import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import React from "react";

export type TechStackCarouselProps = {
  className?: string;
  imgs: {
    path: string,
    className: string,
  }[],
};

export const TechStackCarousel = ({
  className,
  imgs,
}: TechStackCarouselProps) => {
  const plugin = React.useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
    }),
  );

  return (
    <Carousel
      className={cn("w-full", className)}
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {imgs.map((img, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
              <Card>
                <CardContent className="self-center">
                  <img src={img.path} className={img.className} />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
