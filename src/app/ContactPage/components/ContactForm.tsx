"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Twitter, Facebook, Instagram } from "lucide-react"

interface ContactForm {
    name: string
    email: string
    message: string
}

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactForm>()

    const onSubmit = async () => {
        setIsSubmitting(true)

        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSubmitting(false)
    }

    return (
        <section className="min-h-screen bg-white py-24">
            <div className="container mx-auto px-4">
                <motion.div
                initial={{opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8 }}
                className="grad md:grid-cols-2 gap-12"
                >
                    <div className="space-y-8 mx-auto">
                        <h2 className="text-4xl font-bold">お問い合わせ</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="w-1/4">
                                <Input
                                    placeholder="Name"
                                    {...register("name",{ required: true })}
                                    className={errors.name ? "border-red-500" :""}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                            </div>

                            <div className="w-1/4">
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                    className={errors.email? "border-red-500" : ""}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                            </div>

                            <div className="w-1/2">
                                <Textarea
                                    placeholder="Message"
                                    {...register("message", { required: true })}
                                    className={errors.message? "border-red-500" : ""}
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">Message is required</p>}
                            </div>

                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold">Follow Us</h3>
                            <div className="flex items-center gap-6">
                                <div className="flex gap-6">
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <Twitter className="h-6 w-6" />
                                        </a>
                                    </Button>
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                            <Facebook className="h-6 w-6" />
                                        </a>
                                    </Button>
                                    <Button variant="ghost" size="icon" asChild>
                                        <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Instagram className="h-6 w-6" />
                                        </a>
                                    </Button>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-sm">Email: create.rocket@gmail.com</p>
                                </div>
                            </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}