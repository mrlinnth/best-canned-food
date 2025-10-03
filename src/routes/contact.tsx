import { ContactForm } from '@/components/contact-form'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { createFileRoute, Link } from '@tanstack/react-router'
import { MailIcon, MapIcon, PhoneIcon } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <>
      <div className="breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Separator />
      <section className="box">
        <div className="space-y-10">
          <div>
            <h3 className="heading">
              <span className="text-primary">Get In Touch</span> With Us
            </h3>
            <p className="text-secondary-foreground">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            {/* Contact Information Section */}
            <div className="space-y-4">
              {/* Phone Section */}
              <div className="flex">
                <PhoneIcon className="mr-2" />
                <div className="space-y-2">
                  <p className="font-bold">Phone Number</p>
                  <p className="font-semibold text-secondary-foreground">
                    Yangon Office:
                  </p>
                  <p>+959750047294, +959750086524</p>
                  <p className="font-semibold text-secondary-foreground">
                    Mandalay Office:
                  </p>
                  <p>+959444737800, +959750082544</p>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex">
                <MailIcon className="mr-2" />
                <div className="space-y-2">
                  <p className="font-bold">Email Address</p>
                  <a href="mailto@info@amtstationery.com">
                    info@amtstationery.com
                  </a>
                </div>
              </div>

              {/* Location Section */}
              <div className="flex">
                <MapIcon className="mr-2" />
                <div className="space-y-2">
                  <p className="font-bold">Location</p>
                  <p className="font-semibold text-secondary-foreground">
                    Yangon:
                  </p>
                  <p>
                    No. 45, Tha Mein Bayan Rd., Tamwe Township, Yangon, Myanmar.
                  </p>
                  <p className="font-semibold text-secondary-foreground">
                    Mandalay:
                  </p>
                  <p>
                    No. 45, Tha Mein Bayan Rd., Tamwe Township, Yangon, Myanmar.
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-lg md:w-lg mx-auto">
              <ContactForm />
            </div>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7638.545585793623!2d96.17047469116777!3d16.812817754573498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecc8ab05afcf%3A0x3f34b73a8eb1f02d!2sAung%20Myittar%20Co.%2C%20Ltd.!5e0!3m2!1sth!2sth!4v1728543164440!5m2!1sth!2sth"
              height="450"
              loading="lazy"
              className="w-full md:w-6xl"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
