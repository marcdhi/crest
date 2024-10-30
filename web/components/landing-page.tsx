"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, MapPinIcon, LeafIcon, ZapIcon, RecycleIcon, BookOpenIcon, GraduationCapIcon, CodeIcon, HeartPulseIcon, DownloadIcon, PhoneIcon, MailIcon, MenuIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 px-4 lg:px-6 h-20 flex items-center justify-between shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center transition-transform hover:scale-105" href="#">
            <LeafIcon className="h-7 w-7 text-green-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text">
              Crest
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Departments", "Speakers", "Brochures", "Contact"].map((item) => (
              <Link
                key={item}
                className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors relative group"
                href={`#${item.toLowerCase()}`}
              >
                {item}
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
                    Shaping Tomorrow's
                  </span>
                  <br />
                  Sustainable Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl">
                  Join the world's leading conference on sustainable innovation and eco-friendly technologies
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <p className="text-green-700 font-medium flex items-center">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    September 15-17, 2024
                  </p>
                </div>
                <div className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <p className="text-green-700 font-medium flex items-center">
                    <MapPinIcon className="mr-2 h-5 w-5" />
                    EcoCenter, Green City
                  </p>
                </div>
              </div>

              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Register Now
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
                  About Crest
                </span>
              </h2>
              <p className="mx-auto max-w-[800px] text-gray-600 md:text-xl/relaxed">
                Crest is more than a conference - it's a movement towards a sustainable future.
                Join innovators, thought leaders, and change-makers in shaping tomorrow's world.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: LeafIcon,
                  title: "Sustainability",
                  description: "Explore cutting-edge sustainable practices and technologies"
                },
                {
                  icon: ZapIcon,
                  title: "Innovation",
                  description: "Discover groundbreaking ideas for a greener tomorrow"
                },
                {
                  icon: RecycleIcon,
                  title: "Circular Economy",
                  description: "Learn about transforming waste into valuable resources"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300 border-none bg-gradient-to-br from-green-50 to-green-100">
                    <CardContent className="flex flex-col items-center p-8">
                      <div className="rounded-full bg-white p-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                        <item.icon className="h-8 w-8 text-green-600" />
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
                Our Departments
              </h2>
              <p className="text-gray-600 md:text-lg">
                Explore our diverse range of departments dedicated to environmental innovation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-8 h-full justify-between">
                  <BookOpenIcon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Environmental Studies</h3>
                  <p className="text-gray-600 text-center">Exploring the interactions between human societies and the natural world</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-8 h-full justify-between">
                  <GraduationCapIcon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Sustainable Engineering</h3>
                  <p className="text-gray-600 text-center">Developing eco-friendly solutions for a greener future</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-8 h-full justify-between">
                  <CodeIcon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Green Chemistry</h3>
                  <p className="text-gray-600 text-center">Innovating chemical processes to reduce environmental impact</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-8 h-full justify-between">
                  <CodeIcon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Eco-Informatics</h3>
                  <p className="text-gray-600 text-center">Leveraging data science for environmental conservation</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-8 h-full justify-between">
                  <HeartPulseIcon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Environmental Health</h3>
                  <p className="text-gray-600 text-center">Studying the impact of environmental factors on human health</p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-8 h-full justify-between">
                  <CodeIcon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Environmental Law</h3>
                  <p className="text-gray-600 text-center">Shaping policies for a sustainable and just world</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">
              Our Campus
            </h2>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Crest College Campus"
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
                Featured Speakers
              </h2>
              <p className="text-gray-600 md:text-lg">
                Learn from industry leaders and environmental experts
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((speaker) => (
                <Card key={speaker}>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="w-24 h-24 rounded-full bg-green-200 mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">Speaker Name</h3>
                    <p className="text-gray-600 text-center">Expert in Sustainable Technologies</p>
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
                Event Brochures
              </h2>
              <p className="text-gray-600 md:text-lg">
                Download our comprehensive event materials
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {["'Conference Schedule'", "'Speaker Profiles'", "'Campus Map'"].map((brochure) => (
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
                +1 (555) 123-4567
              </p>
              <p className="text-sm flex items-center mb-2">
                <MailIcon className="h-4 w-4 mr-2" />
                info@crestconference.com
              </p>
              <p className="text-sm flex items-center">
                <MapPinIcon className="h-4 w-4 mr-2" />
                123 Eco Street, Green City, 12345
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm hover:underline">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="w-full h-48 bg-green-700 rounded-lg"></div>
              <p className="text-sm mt-2">Interactive map coming soon</p>
            </div>
          </div>
          <div className="border-t border-green-700/30 py-8 text-center">
            <p className="text-sm text-green-100/80">
              © 2024 Crest Conference. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}