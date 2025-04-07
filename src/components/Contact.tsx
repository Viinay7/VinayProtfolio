// components/Contact.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/Firebase";

export function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: Timestamp.now(),
      });

      toast({
        title: "✅ Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        title: "❌ Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-secondary/50 py-16 px-4 md:py-24 md:px-6 fade-in"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center fade-in-down">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <Card className="border-0 bg-transparent shadow-none fade-in-left delay-100">
              <CardHeader className="px-0">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <ContactInfo
                  icon={<Mail size={20} />}
                  title="Email"
                  value="viinay7@gmail.com"
                  link="mailto:viinay7@gmail.com"
                />
                <ContactInfo
                  icon={<Phone size={20} />}
                  title="Phone"
                  value="+91 8186986984"
                  link="tel:+918186986984"
                />
                <ContactInfo
                  icon={<MapPin size={20} />}
                  title="Location"
                  value="Guntur, Andhra Pradesh, India"
                />
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    <SocialLink
                      href="https://github.com/Viinay7"
                      label="GitHub"
                      icon={<Github size={20} />}
                    />
                    <SocialLink
                      href="https://www.linkedin.com/in/vinay-maguluri-881369255/"
                      label="LinkedIn"
                      icon={<Linkedin size={20} />}
                    />
                    <SocialLink
                      href="https://x.com/vinaymaguluri_7"
                      label="X (Twitter)"
                      icon={<XIcon size={20} />}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="fade-in-right delay-200">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormField
                    label="Full Name"
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <FormField
                    label="Subject"
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, id, type, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function ContactInfo({ icon, title, value, link }: any) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {link ? (
          <p className="text-sm text-muted-foreground">
            <a href={link} className="hover:underline">
              {value}
            </a>
          </p>
        ) : (
          <p className="text-sm text-muted-foreground">{value}</p>
        )}
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }: any) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function XIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z"
        fill="currentColor"
      />
    </svg>
  );
}
