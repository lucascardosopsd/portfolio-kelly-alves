"use client";
import { Linkedin, Mail, MapPin, Phone, PhoneIcon } from "lucide-react";

export const navLinks = [
  {
    label: "Inicio",
    url: "#hero",
  },
  {
    label: "Serviços",
    url: "#services",
  },
  {
    label: "Bio",
    url: "#bio",
  },
  {
    label: "Resultados",
    url: "#results",
  },
  {
    label: "Avaliações",
    url: "#rating",
  },
];

export const socialLinks = [
  {
    id: 2,
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/lcpsd/",
  },
  {
    id: 3,
    label: "Whatsapp",
    icon: PhoneIcon,
    url: "https://api.whatsapp.com/send?phone=5517996484654",
  },
];

export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: "(00)00000-0000",
  },
  {
    id: 2,
    icon: Mail,
    text: "email@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    text: "cidade-AB, Brasil",
  },
];
