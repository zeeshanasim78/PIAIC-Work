"use client"

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import sign_up_img from "../../images/sign_up.jpg";
import sign_up_img2 from "../../images/sign_up_img2.png";

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
      className="rounded-md border bg-gray-850"
    />
  )
}

export default function Home() {
  return (
    <>     <div className="bg-gray-200 m-2 p-2">

                <div className="flex flex-row justify-center">
                        <h1 className="flex scroll-m-20 text-blue-900 text-6xl underline font-extrabold tracking-tight lg:text-5xl">
                         Welcome to Developers Club 
                        </h1>
                </div>

                <div className="flex flex-row justify-center  bg-gray-300 m-3 ">
                        <div className="flex flex-col text-center ">
                               <div className="flex text-center m-2">
                                  <h4 className="text-xl font-bold"> Signup by providing for following information : </h4>
                              </div>
                              <div className="flex flex-row text-left  m-4">
                                <ul className="max-w-md space-y-1 ml-5  font-bold text-gray-500 list-disc list-inside dark:text-gray-400">
                                    <li> Enter Your Userame  </li>
                                    <li> Enter Your Email   </li>
                                    <li> Create Your Password  </li>
                                    <li> Enter You Date of Birth </li>
                                    <li> Select the Programming Language  </li>
                                </ul> 
                              </div>
                           
                              <div className="flex flex-row text-center text-gray-800 text-base p-2" >
                                  <label> Enter User Name : </label>
                                  <Input type="text" placeholder="Enter Your Name" className=" w-150"/>
                              </div>
                              <div className="flex flex-row text-center text-gray-800 text-base p-2">
                                  <label> Enter User Email : </label>
                                  <Input type="email" placeholder="Enter Your Email" className=" w-150"/>
                              </div>
                              <div className="flex flex-row text-center text-gray-800 text-base p-2">
                                   <label> Enter Password  : </label>
                                   <Input type="password" placeholder=" Create Your Password" className=" w-150" />
                              </div>    

                              <div className="flex flex-row text-center text-gray-900  text-base p-2">
                                  <label> Select Your DOB   : </label>
                                  <CalendarDemo></CalendarDemo>
                              </div> 

                              <div className="flex flex-row text-center text-gray-900  text-base p-1">
                              <label> Select thr Programming Language  : </label> 
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

                       </div>
                    
                        <div className="flex flex-col ">
                          <Image src={sign_up_img2} height={800} width={800} alt="Sign Up Image"></Image>
                        </div>

                </div>

                <div className="flex flex-col text-center ">
                    <div className="flex flex-row justify-center">
                            <Checkbox id="terms1" />
                            <label
                                  htmlFor="terms1"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mx-3">
                                  I Accept the Website Terms and Conditions
                            </label>
                    </div>
                    <div className="flex flex-row justify-center py-1">
                            <p className="text-sm text-muted-foreground">
                                Please tick checkbox if you agree with our Terms of Service and Privacy Policy.
                            </p>
                    </div>
                </div>
                <div className="flex flex-col text-center ">
                    <Button className="justify-center items-center mx-4">
                            Submit Your Information..
                            <ShoppingCart className="h-4 w-4 mx-2"></ShoppingCart>
                     </Button>
                </div>
          </div>
    </>

     )
}
