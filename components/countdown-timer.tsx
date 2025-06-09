"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  endDate?: Date // Rendre optionnel pour permettre une date fixe
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  // Utiliser une date fixe (10 jours à partir d'une date de référence)
  const fixedEndDate = new Date("2025-06-30T23:59:59")

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Utiliser la date fixe ou celle fournie en prop
    const targetDate = endDate || fixedEndDate

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  const timeUnits = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.seconds },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="group relative">
            <div className="absolute -inset-1 animate-pulse rounded-lg bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] opacity-50 blur-md transition-opacity duration-300 group-hover:opacity-100"></div>
            <div className="relative flex h-20 w-20 items-center justify-center rounded-lg bg-[#150329] text-3xl font-bold text-white shadow-lg sm:h-24 sm:w-24 sm:text-4xl">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#150329] to-[#0a0118] opacity-90"></div>
              <div className="absolute inset-0 rounded-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>
              <span className="relative z-10 bg-gradient-to-r from-white to-[#e2e2f5] bg-clip-text text-transparent">
                {unit.value.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="mt-2 text-sm font-medium text-[#e2e2f5] sm:text-base">{unit.label}</span>
        </div>
      ))}
    </div>
  )
}
