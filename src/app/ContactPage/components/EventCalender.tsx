"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock event data
const events = [
  { date: new Date(2025, 3, 5), title: "Welcome Party", description: "Join us for food and fun!" },
  { date: new Date(2025, 3, 12), title: "Club Tour", description: "Explore our facilities and meet the team." },
  { date: new Date(2025, 3, 19), title: "Workshop", description: "Learn new skills with our experts." },
]

export default function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const selectedEvent = events.find((event) => event.date.toDateString() === selectedDate?.toDateString())

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-8 text-center text-3xl font-bold">イベント情報</h2>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-center">
          <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>詳細情報</CardTitle>
              <CardDescription>{selectedDate ? selectedDate.toDateString() : "Select a date"}</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedEvent ? (
                <div>
                  <h3 className="text-xl font-semibold">{selectedEvent.title}</h3>
                  <p className="mt-2 text-muted-foreground">{selectedEvent.description}</p>
                </div>
              ) : (
                <p>イベントはありません</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

