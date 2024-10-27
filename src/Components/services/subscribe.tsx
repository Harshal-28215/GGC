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
import { Input } from "@/Components/ui/input"
import { useContext } from "react"
import { GGCContext } from "../context/context"
import otpHandler from "../../../utils/otp"

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function InputForm() {

    const context = useContext(GGCContext)
    const { otpactive, handleotpactive, handleotp, handleformdata } = context;

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        const formdata = data.username;

        const otp = await otpHandler(formdata);
        
        if (otp !== undefined) {
            handleotp(otp);
            handleformdata(formdata);
            handleotpactive(true);
            form.reset()
            
            toast({
                variant:"success",
                title: "Success",
                description: "OTP sent successfully please cheack your email.",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to generate OTP. Please try again.",
            });
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={`w-full space-y-6 ${otpactive ? 'hidden' : 'flex'} flex-col justify-center items-center mb-24`}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem className="flex flex-col justify-center items-center">
                            <FormLabel className="text-2xl font-bold">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your email address to receive updates.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="bg-white hover:bg-white/70 text-black rounded-3xl">Subscribe</Button>
            </form>
        </Form>
    )
}
