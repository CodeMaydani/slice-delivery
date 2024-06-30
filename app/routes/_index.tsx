import type { MetaFunction } from "@remix-run/node";
import { Locate, Menu, Pizza } from "lucide-react";
import Layout from "~/components/Layout";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <div className="container flex flex-col gap-4 my-2">
        <Card className="h-96
        flex
        p-4
        bg-cover	
        bg-center
        bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(100,100,100,0.8)),url('https://nomoneynotime.com.au/imager/uploads/recipes/12569/shutterstock_2042520416-1_461122a663362b265b24d0ffaf0f7f5f.jpeg')]
        ">
          <div className="mt-auto">
            <p className="text-3xl">New Pizza!</p>
            <p className="">Deliciously crafted pizzas with a perfect blend of premium toppings and savory sauces.</p>
            <Button>Order Here</Button>
          </div>
        </Card>
        <div className="flex gap-4 justify-center p-4">
          <Button variant={"outline"} className="size-60">
            <Pizza className="size-32 hover:scale-110" />
          </Button>
          <Button variant={"outline"} className="size-60">
            <Locate className="size-32 hover:scale-110" />
          </Button>
          <Button variant={"outline"} className="size-60">
            <Menu className="size-32 hover:scale-110" />
          </Button>
        </div>
      </div>
    </Layout>
  );
}
