import Autoplay from "embla-carousel-autoplay";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "~/components/ui/carousel";

export type PizzaItem = {
    id: number;
    url: string;
    link: string;
}
interface PizzaCaruselProps {
    pizzaItem: PizzaItem[]
}

export function PizzaCarusel({ pizzaItem }: PizzaCaruselProps) {
    return (
        <Carousel
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full">
            <CarouselContent >
                {pizzaItem.map(({ id, link, url }) => (
                    <CarouselItem key={id}>
                        <Card className={`h-96
                                        flex
                                        p-4
                                        bg-cover	
                                        bg-center
                                        bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(100,100,100,0.8)),url('${url}')]
                                        `}>
                            <div className="mt-auto">
                                <p className="text-3xl">New Pizza!</p>
                                <p className="">Deliciously crafted pizzas with a perfect blend of premium toppings and savory sauces.</p>
                                <Button>Order Now</Button>
                            </div>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel >
    )
}
