import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type TechStackCarouselProps = {
  className?: string;
  imgPaths: string[];
};

export const TechStackCarousel = ({
  className,
  imgPaths,
}: TechStackCarouselProps) => {
  return (
    <Carousel className={cn(className)}>
      <CarouselContent>
        {imgPaths.map((imgPath, index) => {
          return (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
              <Card>
                <CardContent className="self-center">
                  <img src={imgPath} className="w-20 h-20 bg-transparent" />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};
