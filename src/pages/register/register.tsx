import * as React from "react"
import '@/styles/globals.css'


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Register() {
  return (
    <Card className="md:w-[450px] w-full">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Register and start your journey</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Passowrd</Label>
              <Input type="password" id="password" placeholder="Password" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="text-sm">I have account <Button variant="link" className="ml-0 pl-0 underline"> Login</Button>
</p>
        <Button className="ml-auto">Register</Button>
      </CardFooter>
    </Card>
  )
}
