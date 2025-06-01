"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import Link from "next/link"

export default function Pricing() {


  return (
    <section id="pricing" className="relative bg-[#0a0118] py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-[20%] top-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#ff2970]/10 blur-[150px]"></div>
        <div className="absolute -right-[20%] bottom-[10%] h-[500px] w-[500px] animate-pulse rounded-full bg-[#4cc9f0]/10 blur-[150px]"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZjI5NzAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 inline-block rounded-full bg-gradient-to-r from-[#ff2970]/20 to-[#4cc9f0]/20 px-4 py-1 backdrop-blur-sm"
          >
            <span className="bg-gradient-to-r from-[#ff2970] to-[#4cc9f0] bg-clip-text text-sm font-medium text-transparent">
              OFFRE LIMITÉE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-3xl font-bold text-white sm:text-4xl"
          >
            Offre{" "}
            <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-transparent">Spéciale</span>{" "}
            à Durée Limitée
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-[#e2e2f5]"
          >
            Profitez de notre offre promotionnelle avant qu'elle n'expire
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl"
        >
          <div className="absolute -inset-0.5 animate-pulse rounded-2xl bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] opacity-70 blur-sm"></div>

          <div className="relative overflow-hidden rounded-2xl border border-[#7b2cbf]/30 bg-gradient-to-b from-[#150329] to-[#0a0118] shadow-[0_0_30px_rgba(123,44,191,0.3)]">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-20"></div>

            <div className="relative bg-gradient-to-r from-[#ff2970] to-[#ff9770] p-4 text-center">
              <Sparkles className="mr-2 inline-block h-5 w-5 text-white" />
              <span className="text-lg font-semibold uppercase tracking-wider text-white">Offre à Durée Limitée</span>
            </div>

            <div className="relative p-8 text-center">
              <h3 className="mb-6 text-2xl font-bold text-white">L'offre se termine dans :</h3>
              <div className="mb-8">
                <CountdownTimer />
              </div>

              <div className="mb-8 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-lg text-[#e2e2f5]/70 line-through">15000 FCFA</span>
                  <div className="flex items-baseline justify-center">
                    <span className="bg-gradient-to-r from-[#ff2970] to-[#ff9770] bg-clip-text text-6xl font-bold text-transparent">
                      5000
                    </span>
                    <span className="ml-2 text-xl text-white">FCFA</span>
                  </div>
                  <span className="text-[#e2e2f5]/70">(8$ par an)</span>
                </div>
              </div>

              <div className="mb-8 grid gap-4 text-left sm:grid-cols-2">
                {[
                  "Accès à 9 plateformes premium",
                  "Ultra HD 4K",
                  "Compatible multi-appareils",
                  "Contenu en français ou VOSTFR",
                  "Mises à jour régulières",
                  "Support client 24/7",
                  "Pas de publicités",
                  "Téléchargement disponible",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff2970] to-[#ff9770]">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-[#e2e2f5]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="absolute -inset-1 animate-pulse rounded-lg bg-gradient-to-r from-[#ff2970] via-[#7b2cbf] to-[#4cc9f0] opacity-70 blur-sm"></div>
                <Button
                  asChild
                  size="lg"
                  className="relative w-full bg-gradient-to-r from-[#ff2970] to-[#ff9770] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,41,112,0.5)]"
                >
                  <Link href="https://www.pay.moneyfusion.net/plateforme-dabonnement-streaming-9-en-1-_1745096261612/">
                    <span className="relative z-10">Acheter maintenant</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#ff2970] to-[#ff9770] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                  </Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-[#e2e2f5]/70">Satisfait ou remboursé pendant 30 jours</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 overflow-hidden rounded-xl border border-[#4cc9f0]/30 bg-gradient-to-r from-[#150329] to-[#0a0118] p-8 text-center shadow-[0_0_30px_rgba(76,201,240,0.2)]"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZGVmcz4KICA8cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgIDxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0Y2M5ZjAxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9wYXR0ZXJuPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPg==')] opacity-10"></div>

          <h3 className="relative mb-4 text-2xl font-bold text-white">
            Économisez plus de{" "}
            <span className="bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] bg-clip-text text-transparent">90%</span> par
            rapport aux abonnements séparés !
          </h3>

          <p className="relative mb-6 text-lg text-[#e2e2f5]">
            L'abonnement à ces 9 plateformes vous coûterait plus de{" "}
            <span className="font-bold text-white">50000 FCFA</span> par mois. Avec Freecine, accédez à tout pour
            seulement <span className="font-bold text-white">5000 an</span> !
          </p>

          <Button
            asChild
            size="lg"
            className="relative cursor-pointer overflow-hidden bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(76,201,240,0.5)]"
          >
            <Link href="https://www.pay.moneyfusion.net/plateforme-dabonnement-streaming-9-en-1-_1745096261612/">
              <span className="relative z-10 ">Acheter Freecine maintenant</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#4cc9f0] to-[#7b2cbf] opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
