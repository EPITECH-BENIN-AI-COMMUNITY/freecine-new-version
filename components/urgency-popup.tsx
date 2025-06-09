"use client"

import { useState, useEffect, useRef } from "react"
import { X, Clock, Users, ShieldCheck, DollarSign, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UrgencyPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasClosedPopup, setHasClosedPopup] = useState(false)
  const [visitors, setVisitors] = useState(45) // Valeur initiale fixe
  const popupRef = useRef<HTMLDivElement>(null)

  // Calculer une date qui est toujours dans 24h à partir de maintenant
  const getEndDate = () => {
    const now = new Date()
    return new Date(now.getTime() + 24 * 60 * 60 * 1000) // 24h à partir de maintenant
  }

  const [endDate] = useState(getEndDate()) // Fixe la date une seule fois au montage
  const [countdown, setCountdown] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    // Vérifier si le popup a déjà été fermé dans cette session
    const popupClosed = localStorage.getItem("urgencyPopupClosed") === "true"
    
    if (popupClosed) {
      setHasClosedPopup(true)
      return // Ne pas continuer si déjà fermé
    }

    // Timer pour afficher le popup après 30 secondes
    const showTimer = setTimeout(() => {
      if (!hasClosedPopup) {
        setIsVisible(true)
      }
    }, 30000) // 30 secondes

    return () => {
      clearTimeout(showTimer)
    }
  }, []) // Dépendances vides pour n'exécuter qu'une fois

  // Effet séparé pour le countdown
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const difference = endDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        setCountdown({ hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setCountdown({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [endDate])

  // Effet séparé pour les visiteurs
  useEffect(() => {
    const visitorInterval = setInterval(() => {
      // Variation plus réaliste entre 40 et 55
      setVisitors(Math.floor(Math.random() * 16) + 40)
    }, 8000) // Change toutes les 8 secondes

    return () => {
      clearInterval(visitorInterval)
    }
  }, [])

  // Effet séparé pour gérer les clics en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup()
      }
    }

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isVisible])

  const closePopup = () => {
    setIsVisible(false)
    setHasClosedPopup(true)
    localStorage.setItem("urgencyPopupClosed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div ref={popupRef} className="relative max-w-xs sm:max-w-md overflow-visible">
        <div className="absolute -inset-0.5 animate-pulse rounded-xl bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] opacity-70 blur-sm"></div>

        <div className="relative overflow-hidden rounded-xl border border-[#7b2cbf]/30 bg-[#150329] p-4 sm:p-6 shadow-[0_0_30px_rgba(123,44,191,0.3)]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>

          <button
            onClick={closePopup}
            className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full bg-[#150329]/80 p-1 text-[#e2e2f5]/70 transition-colors duration-300 hover:text-white"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Fermer</span>
          </button>

          <div className="relative z-10 mb-3 sm:mb-4 text-center">
            <div className="mx-auto mb-3 sm:mb-4 flex h-12 sm:h-16 w-12 sm:w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770]">
              <Clock className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
            </div>
            <h3 className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-xl sm:text-2xl font-bold text-transparent">
              Offre Spéciale Flash !
            </h3>
          </div>

          <div className="relative z-10 mb-3 sm:mb-4 flex justify-center space-x-2">
            <div className="flex h-12 sm:h-14 w-12 sm:w-14 flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 backdrop-blur-md">
              <span className="text-lg sm:text-xl font-bold text-white">
                {countdown.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-[#e2e2f5]/70">Heures</span>
            </div>
            <div className="flex h-12 sm:h-14 w-12 sm:w-14 flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 backdrop-blur-md">
              <span className="text-lg sm:text-xl font-bold text-white">
                {countdown.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-[#e2e2f5]/70">Minutes</span>
            </div>
            <div className="flex h-12 sm:h-14 w-12 sm:w-14 flex-col items-center justify-center rounded-lg bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 backdrop-blur-md">
              <span className="text-lg sm:text-xl font-bold text-white">
                {countdown.seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs text-[#e2e2f5]/70">Secondes</span>
            </div>
          </div>

          <p className="relative z-10 mb-3 sm:mb-4 text-center text-sm sm:text-base text-[#e2e2f5]">
            <span className="font-bold text-white">DERNIÈRE CHANCE</span> d'obtenir Freecine à{" "}
            <span className="font-bold text-white">5000 FCFA</span> au lieu de{" "}
            <span className="font-bold text-white">15000 FCFA</span> !
          </p>

          <div className="relative z-10 mb-3 sm:mb-4 grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1 sm:gap-2 rounded-lg bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 p-2">
              <DollarSign className="h-4 sm:h-5 w-4 sm:w-5 text-[#ff2970]" />
              <span className="text-xs sm:text-sm text-[#e2e2f5]">Économisez 66%</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 rounded-lg bg-gradient-to-r from-[#7b2cbf]/20 to-[#5a189a]/20 p-2">
              <ShieldCheck className="h-4 sm:h-5 w-4 sm:w-5 text-[#7b2cbf]" />
              <span className="text-xs sm:text-sm text-[#e2e2f5]">100% Sécurisé</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 rounded-lg bg-gradient-to-r from-[#4cc9f0]/20 to-[#4361ee]/20 p-2">
              <Zap className="h-4 sm:h-5 w-4 sm:w-5 text-[#4cc9f0]" />
              <span className="text-xs sm:text-sm text-[#e2e2f5]">Ultra HD 4K</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 rounded-lg bg-gradient-to-r from-[#ff9770]/20 to-[#ff7d50]/20 p-2">
              <Users className="h-4 sm:h-5 w-4 sm:w-5 text-[#ff9770]" />
              <span className="text-xs sm:text-sm text-[#e2e2f5]">Multi-appareils</span>
            </div>
          </div>

          <div className="relative z-10 mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gradient-to-r from-[#ff2970]/20 to-[#ff9770]/20 p-2 sm:p-3">
            <div className="flex items-center justify-center gap-1 sm:gap-2">
              <Users className="h-4 sm:h-5 w-4 sm:w-5 text-[#ff2970]" />
              <p className="text-center text-xs sm:text-sm font-medium text-[#ff2970]">
                <span className="font-bold">{visitors}</span> personnes consultent cette offre
              </p>
            </div>
            <div className="mt-1 sm:mt-2 h-1 w-full overflow-hidden rounded-full bg-[#e2e2f5]/10">
              <div className="h-full w-3/4 animate-pulse rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770]"></div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -inset-1 animate-pulse rounded-lg bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] opacity-70 blur-sm"></div>
            <Button
              asChild
              className="relative w-full bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)]"
            >
              <Link href="#pricing">
                <span className="relative z-10 text-sm sm:text-base">ACHETER MAINTENANT À -66%</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}