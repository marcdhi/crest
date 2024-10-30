"use client"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, LeafIcon, DownloadIcon, PhoneIcon, MailIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { LANDING_PAGE, getIcon } from "@/constants/landing-page"

export function LandingPage() {
  const { header, hero, about, departments, campus, speakers, brochures, footer } = LANDING_PAGE;
  type IconType = "leaf" | "zap" | "recycle" | "book" | "graduation" | "code" | "heart";

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 px-4 lg:px-6 h-20 flex items-center justify-between shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center transition-transform hover:scale-105" href="#">
            <LeafIcon className="h-7 w-7 text-green-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
              {header.logo.text}
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {header.navigation.map((item) => (
              <Link
                key={item.label}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors relative group"
                href={item.href}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
          <Button className="md:hidden" variant="ghost">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>

      <main className="flex-1 pt-20">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-green-100" />
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  <span className="bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
                    {hero.title.highlight}
                  </span>
                  <br />
                  {hero.title.main}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  {hero.subtitle}
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <p className="text-green-700 font-medium flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {hero.eventDetails.date}
                  </p>
                </div>
                <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <p className="text-green-700 font-medium flex items-center">
                    <MapPinIcon className="mr-2 h-5 w-5" />
                    {hero.eventDetails.location}
                  </p>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                {hero.cta}
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-24 lg:py-32 bg-white" id="about">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                <span className="bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
                  {about.title}
                </span>
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl/relaxed">
                {about.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {about.features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-green-50 to-green-100">
                    <CardContent className="flex flex-col items-center p-8">
                      <div className="rounded-full bg-white p-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                       {React.createElement(getIcon(item.icon as IconType), {
                          className: "h-8 w-8 text-green-600"
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-24 lg:py-32 bg-green-50" id="departments">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 mb-4">
                {departments.title}
              </h2>
              <p className="text-gray-600 md:text-lg">
                {departments.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {departments.list.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-green-50 to-green-100">
                    <CardContent className="flex flex-col items-center p-8">
                      <div className="rounded-full bg-white p-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                        {React.createElement(getIcon(item.icon as IconType), {
                          className: "h-8 w-8 text-green-600"
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-green-800 mt-6 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-center">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">
              {campus.title}
            </h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={campus.image.src}
                alt={campus.image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-24 lg:py-32 bg-white" id="speakers">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 mb-4">
                {speakers.title}
              </h2>
              <p className="text-gray-600 md:text-lg">
                {speakers.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {speakers.list.map((speaker, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-24 h-24 rounded-full bg-green-200 mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">{speaker.name}</h3>
                    <p className="text-gray-600 text-center">{speaker.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-24 lg:py-32 bg-green-50" id="brochures">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 mb-4">
                {brochures.title}
              </h2>
              <p className="text-gray-600 md:text-lg">
                {brochures.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {brochures.list.map((brochure) => (
                <Card key={brochure}>
                  <CardContent className="flex flex-col items-center p-6">
                    <DownloadIcon className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">{brochure}</h3>
                    <Button className="mt-4">Download PDF</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Crest</h3>
              <p className="text-sm">Crest is dedicated to fostering sustainable innovation and eco-friendly technologies.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm flex items-center mb-2">
                <PhoneIcon className="h-4 w-4 mr-2" />
                {footer.contact.phone}
              </p>
              <p className="text-sm flex items-center mb-2">
                <MailIcon className="h-4 w-4 mr-2" />
                {footer.contact.email}
              </p>
              <p className="text-sm flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2" />
                {footer.contact.address}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footer.quickLinks.links.map((link) => (
                  <li key={link.label}><Link href={link.href} className="text-sm hover:underline">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="w-full h-48 bg-green-700 rounded-lg"></div>
              <p className="text-sm mt-2">{footer.location.mapPlaceholder}</p>
            </div>
          </div>
          <div className="border-t border-green-700/30 py-8 text-center">
            <p className="text-sm text-green-100/80">
              {footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}