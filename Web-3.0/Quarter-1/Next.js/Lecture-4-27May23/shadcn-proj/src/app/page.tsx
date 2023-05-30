"use client"

import Image from "next/image";
import { ShoppingCart } from "lucide-react";

import { Button } from "../../components/ui/button" ;
import { Input } from "../../components/ui/input";
import { Calendar } from "../../components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

import { ListFormat } from "typescript";
import React from "react";
import { Checkbox } from "../../components/ui/checkbox";

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}

export default function Home() {
  return (
    <>      
                <div>
                    <h1 className="flex scroll-m-20 text-blue-900 text-6xl font-extrabold tracking-tight lg:text-5xl">
                    Welcome to Developers Club                     </h1>

                    <h3 className="text-2xl font-bold"> Signup by Providing for following information : </h3>
                    <br></br>
                </div>
                <div>
                  <br></br>
                    <ul className="max-w-md space-y-1 ml-5 font-bold text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li> Enter Your Userame  </li>
                        <li> Enter Your Email   </li>
                        <li> Create Your Password  </li>
                        <li> Enter You Date of Birth </li>
                        <li> Select the Programming Language  </li>
                        <li>  Accept the Terms and Conditions.. </li>
                    </ul>
                </div>
                <div>
                     <Input type="text" placeholder="Enter Your Name"/>
                     <Input type="email" placeholder="Enter Your Email" />
                     <Input type="password" placeholder=" Create Your Password" />
                </div>
                <div>
                    <h2 className="text-2xl font-extrabold"> Select Your DOB </h2>
                    <CalendarDemo></CalendarDemo>
                </div>
                <div>
                    <h2 className="text-2xl font-extrabold"> Select thr Programming Language</h2>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Python" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="ts">TypeScript</SelectItem>
                        <SelectItem value="csharp">C#</SelectItem>
                      </SelectContent>
                    </Select>
                </div>
                
                <div className="items-top flex space-x-2">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                    <p className="text-sm text-muted-foreground">
                      You agree to our Terms of Service and Privacy Policy.
                    </p>
                  </div>
                </div>
                <Button>
                  Submit Your Information..
                  <ShoppingCart className="mr-2 h-4 w-4"></ShoppingCart>
                  </Button>
    </>

     )
}
