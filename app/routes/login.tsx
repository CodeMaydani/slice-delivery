import { Form, redirect } from "@remix-run/react"
import { Lock, User } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Card } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import bikeDelivery from '~/images/delivery-bike_6947616.png'

function login() {
    return (
        <div className="grid place-items-center h-screen 
          bg-cover	
          bg-center
        bg-[url('https://nomoneynotime.com.au/imager/uploads/recipes/12569/shutterstock_2042520416-1_461122a663362b265b24d0ffaf0f7f5f.jpeg')]
          ">
            {/* bg-[linear-gradient(to_bottom,rgba(100,100,100,0.1),rgba(0,0,0,0.4)),url('https://nomoneynotime.com.au/imager/uploads/recipes/12569/shutterstock_2042520416-1_461122a663362b265b24d0ffaf0f7f5f.jpeg')] */}
            <Card className="h-96 w-96 p-4 bg-card/85">
                <Form method="POST" className="h-full flex flex-col items-center gap-4">
                    <img src={bikeDelivery} alt="delivey bike" className="size-20" />
                    <div className="border-b-2 border-yellow-500 w-10"></div>
                    <p className="text-3xl mb-5 tracking-tighter font-bold text-yellow-500">SLICE DELIVERY</p>
                    <div className="relative w-full">
                        <User className="absolute top-2 left-2 text-yellow-500" />
                        <Input placeholder="Username" className="pl-10" />
                    </div>
                    <div className="relative w-full">
                        <Lock className="absolute top-2 left-2 text-yellow-500" />
                        <Input placeholder="Password" className="pl-10" />
                    </div>
                    <Button className="w-full mt-auto">Login</Button>
                </Form>
            </Card>
        </div>
    )
}


export async function action() {

    return redirect('/')
}

export default login