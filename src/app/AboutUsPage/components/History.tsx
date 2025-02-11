"use client"

// import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

type TimeLineEvents = {
    year: string,
    title: string,
    description: string,
    icon: string,
}

const timeLineEvents : TimeLineEvents [] = [
    {
        year: "2008",
        title: "ロケットガール&ボーイ育成講座支援に1名の東工大生が参加 ",
        description: "",
        icon: "",
    },
    {
        year: "2010-2011",
        title: "CREATEとして活動開始",
        description: "",
        icon: "",
    },
    {
        year: "2014",
        title: "CREATEが公認サークル化",
        description: "",
        icon: "",
    },
    {
        year: "2015",
        title: "CanSat搭載機体C-03Jの打ち上げ",
        description: "",
        icon: "",
    },
    {
        year: "2016",
        title: "J型エンジンで高度1km到達",
        description: "",
        icon: "",
    },
    {
        year: "2018",
        title: "CanSat&煙玉搭載機体C-41Jの打ち上げ",
        description: "",
        icon: "",
    },
    {
        year: "2019",
        title: "二段式ロケットC-43Jの打ち上げ",
        description: "",
        icon: "",
    },
    {
        year: "2021",
        title: "自作エンジンJ-3i搭載機体C-53Jの打ち上げ成功",
        description: "",
        icon: "",
    },
    {
        year: "2023",
        title: "バルブシステム搭載機体C-71Jの打ち上げ成功",
        description: "",
        icon: "",
    },
    {
        year: "2025",
        title: "自作エンジンM-5i+バルブシステム燃焼成功",
        description: "",
        icon: "",
    },
]

export default function History() {

    return (
        <section id="history" className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">CREATE HISTORY</h2>
                <div className="relative">
                    <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300" />
                    {timeLineEvents.map((event, index) => (
                        <TimeLineEvent key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TimeLineEvent({ event, index }) {
    const { ref, inView } = useInView({ triggerOnce: true })
    const isEven = index % 2 === 0

    return (
        <div ref={ref} className={`mb-8 flex ${isEven ? "flex-row-reverse" : ""} items-center justify-center`}>
            <div className={`w-5/12 ${isEven ? "text-right" :""}`}>
              <Card 
                className={`transition-all duration-500 ${
                    inView ? "transition-y-0 opacity-100" : `${isEven ? "translate-x-full" : "-translate-x-full"} opacity-0`
                }`}>
                    <CardContent>
                        <h3 className="mb-2 text-xl font-semibold">{event.year}</h3>
                        <p className="mb-2 text-lg">{event.title}</p>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Learn More</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{event.title}-{event.year}</DialogTitle>
                                </DialogHeader>
                                <p>{event.description}</p>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>
            </div>
            <div className="relative mx-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-2xl text-primary-foreground">
                {event.icon}
            </div>
            <div className="w-5/12" />
        </div>
    )
}