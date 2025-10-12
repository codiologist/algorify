import type { StaticImageData } from "next/image";

export interface ServiceCategory {
  id: number;
  service_id: string;
  title: string;
  description: string;
  services: string[];
  bg?: string;
  thumbnail: HTMLImageElement | string | StaticImageData;
  thumbnail_mobile?: HTMLImageElement | string | StaticImageData;
}

import data_analytics_thumb from "@/assets/images/service-thumbs/data-analytics-thumb.jpg";
import sass_dev_thumb from "@/assets/images/service-thumbs/sass-dev-thumb.jpg";
import ux_ui_thumb from "@/assets/images/service-thumbs/ux-ui-thumb.jpg";
import web_dev_thumb from "@/assets/images/service-thumbs/web-dev-thumb.jpg";
import webflow_dev_thumb from "@/assets/images/service-thumbs/webflow-dev-thumb.jpg";

import data_analytics_mobile_thumb from "@/assets/images/service-thumbs/data-analytics-mobile-thumb.jpg";
import sass_dev_mobile_thumb from "@/assets/images/service-thumbs/sass-dev-mobile-thumb.jpg";
import ux_ui_mobile_thumb from "@/assets/images/service-thumbs/ux-ui-mobile-thumb.jpg";
import web_dev_mobile_thumb from "@/assets/images/service-thumbs/web-dev-mobile-thumb.jpg";
import webflow_dev_mobile_thumb from "@/assets/images/service-thumbs/webflow-dev-mobile-thumb.jpg";

export const SERVICES_CONTENT: ServiceCategory[] = [
  {
    id: 1,
    title: "UI UX Design",
    service_id: "ui-ux-design",
    description:
      "We craft intuitive and user-friendly experiences that enhance navigation and engagement. Our focus is on creating seamless digital interactions that align with your brand identity and user needs.",
    services: [
      "UI UX Design",
      "User Research",
      "Usability Testing",
      "Wireframe & Prototyping",
      "Visual UI  Design",
    ],
    thumbnail: ux_ui_thumb,
    thumbnail_mobile: ux_ui_mobile_thumb,
    bg: "bg-blue-brand",
  },
  {
    id: 2,
    service_id: "web-app-development",
    title: "Web & App development",
    description:
      "We build high-performance web and mobile applications that are scalable, user-centric, and business-driven. Our goal is to create seamless digital experiences that empower brands and enhance user engagement.",
    services: [
      "Custom Web Development",
      "Mobile App Development",
      "Full-Stack Development",
      "API Integration",
      "Performance Optimization",
    ],
    thumbnail: web_dev_thumb,
    thumbnail_mobile: web_dev_mobile_thumb,
  },
  {
    id: 3,
    title: "Data Analytics",
    service_id: "data-analytics",
    description:
      "We transform raw data into actionable insights to help businesses make informed decisions. Our data-driven approach ensures efficiency, accuracy, and strategic growth.",
    services: [
      "Data Visualization",
      "Predictive Analytics",
      "Big Data Processing & Analysis",
      "Business Intelligence Solutions",
      "Data-Driven Strategy Consulting",
    ],
    thumbnail: data_analytics_thumb,
    thumbnail_mobile: data_analytics_mobile_thumb,
  },
  {
    id: 4,
    title: "Webflow Development",
    service_id: "webflow-development",
    description:
      "We create custom, responsive, and visually stunning websites with Webflow, ensuring seamless performance and effortless scalability—without the need for complex coding.",
    services: [
      "Custom Webflow Development",
      "Responsive Design",
      "CMS Integration ",
      "SEO Optimization",
      "Web Animations & Interactions",
    ],
    thumbnail: webflow_dev_thumb,
    thumbnail_mobile: webflow_dev_mobile_thumb,
  },
  {
    id: 5,
    title: "SaaS Design & Development",
    service_id: "saas-design-development",
    description:
      "We design and develop scalable, high-performance SaaS platforms that deliver seamless user experiences and drive business growth. Our approach ensures efficiency, security, and intuitive usability for cloud-based applications.",
    services: [
      "SaaS UI/UX Design",
      "Custom SaaS Development",
      "Cloud Integration",
      "API Development",
      "Subscription & Billing Systems",
    ],
    thumbnail: sass_dev_thumb,
    thumbnail_mobile: sass_dev_mobile_thumb,
  },
];
