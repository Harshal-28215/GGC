"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "../../hooks/use-toast"
import { Button } from "@/Components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/Components/ui/input-otp"
import { useContext } from "react"
import { GGCContext } from "../context/context"
import emailHandler from "../../../utils/emailroute"

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
})

export function Brochure() {

    const context = useContext(GGCContext)
    const {otpactive, otp, handleotpactive, formdata} = context;

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        
        const pin = data.pin.toString();
        
        if (pin === otp) {
            handleotpactive(false)
            emailHandler(formdata, "");
            form.reset()

            toast({
                variant:"success",
                title: "Success",
                description: "Sending Brochure to your email this can take while.",
            })
        }else{
            toast({
                variant: "destructive",
                title: "Error",
                description: "OTP does not match.",
            })
        }
        

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full space-y-6 ${otpactive? 'flex' : 'hidden'} flex-col justify-center items-center mb-24`}>
                <FormField
                    control={form.control}
                    name="pin"
                    render={({ field }) => (
                        <FormItem className="flex flex-col justify-center items-center">
                            <FormLabel>One-Time Password</FormLabel>
                            <FormControl>
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                            <FormDescription>
                                Please enter the one-time password sent to your phone.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="bg-white hover:bg-white/70 text-black rounded-3xl">Submit</Button>
            </form>
        </Form>
    )
}
