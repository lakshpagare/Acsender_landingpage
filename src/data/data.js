import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export const mainContent = {
  title: "IT Solution Services: Your Reliable IT Services Company",
  description:
    "Welcome to Acsender, a leading IT services company offering top-notch IT solution services tailored for businesses of all sizes. In today’s fast-paced digital world, you need an IT partner that understands your unique challenges and delivers effective solutions.",
};

export const homeAbout = {
  des1: "Welcome to Acsender, where creativity meets technology. We are a dedicated team of professionals committed to crafting innovative, high-quality websites that drive success. With a proven track record of delivering tailored solutions, we specialize in web design and development that aligns with your business goals and engages your target audience.",
  des2: "Our passion for excellence and customer satisfaction drives us to exceed expectations and deliver results. Partner with us to bring your digital vision to life and experience the difference of working with a team that truly understands your needs and aspirations.",
};

export const homeServices = {
  title: "Ready to Transform Your Business with Expert IT solution services?",
  description:
    "Partner with Acsender today! Our expert IT solution services will empower your organization and help you stay ahead in the competitive landscape.",
};

export const services = [
  {
    id: 1,
    name: "Web Development",
    shortDescription:
      "Developing responsive, scalable web applications tailored to your business needs.",
    longDescription:
      "Developing responsive, scalable, and secure web applications tailored to your business needs. Using the latest technologies and frameworks to ensure a robust online presence.",
    price: 1500,
    duration: "2-4 weeks",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Angular", "Node.js"],
    href: "web-development",
    icon: ChartPieIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 2,
    name: "Mobile App Development",
    shortDescription:
      "Creating high-performance native and cross-platform mobile apps for seamless experiences on iOS and Android.",
    longDescription:
      "Creating high-performance, native, and cross-platform mobile apps. Designed with a user-centric approach to deliver seamless experiences on both iOS and Android platforms.",
    price: 3000,
    duration: "4-6 weeks",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    href: "mobile-app-development",
    icon: CursorArrowRaysIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
  {
    id: 3,
    name: "SEO & Digital Marketing",
    shortDescription:
      "Enhancing online visibility through strategic SEO practices and digital marketing to drive organic traffic.",
    longDescription:
      "Improving online visibility through strategic SEO practices and digital marketing campaigns. Driving organic traffic and enhancing brand presence across digital channels.",
    price: 800,
    duration: "2-3 weeks",
    technologies: ["SEO", "Google Analytics", "Content Marketing"],
    href: "seo-digital-marketing",
    icon: ArrowPathIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
  {
    id: 4,
    name: "UI/UX Design",
    shortDescription:
      "Designing intuitive interfaces with a focus on user experience to engage your audience effectively.",
    longDescription:
      "Designing intuitive interfaces with a focus on user experience. Crafting visually appealing and easy-to-navigate designs to engage your audience effectively.",
    price: 1000,
    duration: "1-3 weeks",
    technologies: ["Figma", "Sketch", "Adobe XD"],
    href: "ui-ux-design",
    icon: FingerPrintIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
  {
    id: 5,
    name: "Cloud Services",
    shortDescription:
      "Setting up and managing cloud infrastructure for scalability and reliability using AWS, Azure, and Google Cloud.",
    longDescription:
      "Setting up and managing cloud infrastructure to ensure scalability and reliability. Leveraging cloud platforms like AWS, Azure, and Google Cloud for optimized performance.",
    price: 2500,
    duration: "2-4 weeks",
    technologies: ["AWS", "Azure", "Google Cloud"],
    href: "cloud-services",
    icon: SquaresPlusIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
  },
  {
    id: 6,
    name: "Technical Support",
    shortDescription:
      "24/7 technical support for software and hardware to ensure smooth operation of your systems.",
    longDescription:
      "Providing 24/7 technical support for software and hardware issues. Ensuring smooth operation of systems with troubleshooting, maintenance, and remote support services.",
    price: 500,
    duration: "Ongoing",
    technologies: ["Remote Support", "Troubleshooting", "System Maintenance"],
    href: "technical-support",
    icon: ArrowPathIcon,
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  },
];

export const IndustryWeServe = [
  {
    id: 1,
    title: "Manufacturing",
    description:
      "Manufacturing IT streamlines and automates production processes, making operations more efficient and less cumbersome.",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Health IT empowers patients by providing access to their health data, enabling them to take greater control of their health journey.",
  },
  {
    id: 3,
    title: "Education",
    description:
      "The integration of information and communication technology is revolutionizing the learning experience for students, enhancing engagement and knowledge retention.",
  },
  {
    id: 4,
    title: "Travel & Tourism",
    description:
      "The travel and tourism sector consists of three primary forms: domestic tourism, inbound tourism, and outbound tourism, each offering unique opportunities for exploration and growth.",
  },
];

export const WebDevelopment = [
  {
    id: 1,
    name: "Magnificent Designs",
    description:
      "We create captivating designs that convert. Our stunning visuals and intuitive UI drive measurable growth and deliver tangible results for your business.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Product Uniqueness",
    description:
      "At Acsender, we design bespoke websites for premium brands, blending creativity and strategy to ensure online success and long-term growth.",
    icon: GlobeAltIcon,
  },
  {
    id: 3,
    name: "Result-Driven Websites",
    description:
      "As dedicated web design partners, Acsender creates visually stunning, strategically designed websites that captivate audiences and drive meaningful engagement.",
    icon: GlobeAltIcon,
  },
  {
    id: 4,
    name: "Analyze",
    description:
      "At Acsender, we analyze your business and competitors to craft strategic, goal-driven websites that stand out and align with your market objectives.",
    icon: GlobeAltIcon,
  },
  {
    id: 5,
    name: "Customize",
    description:
      "After analysis, Acsender moves to the design phase, crafting captivating, custom designs that align your business with its website, boosting conversions and growth.",
    icon: GlobeAltIcon,
  },
  {
    id: 6,
    name: "Support",
    description:
      "Our partnership extends beyond design at Acsender. We provide exceptional website support and regular updates at a nominal price to help your business grow and maximize revenue potential.",
    icon: GlobeAltIcon,
  },
];

export const MobileAppDevelopment = [
  {
    id: 1,
    name: "Scope Analysis",
    description:
      "In the initial phase, Acsender conducts a thorough scope analysis to create a detailed work plan for mobile app development. This plan outlines essential features and functionalities, providing a clear roadmap for success.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Task Planning",
    description:
      "Our mobile app designers at Acsender develop strategies that align with audience expectations. We manage milestones, testing, and delivery, ensuring a seamless process that brings your vision to life and meets all project goals.",
    icon: GlobeAltIcon,
  },
  {
    id: 3,
    name: "Development",
    description:
      "At Acsender, we use agile mobile app development practices, prioritizing communication and collaboration. This approach enables us to deliver efficient solutions that add significant business value, ensuring your app meets user needs and market demands.",
    icon: GlobeAltIcon,
  },
  {
    id: 4,
    name: "Testing",
    description:
      "Our experienced testers create comprehensive testing scenarios to evaluate functionality, usability, and overall quality. This rigorous quality assurance process ensures your mobile app meets the highest standards before launch.",
    icon: GlobeAltIcon,
  },
];

export const DigitalMarketing = [
  {
    id: 1,
    name: "Search Engine Optimization (SEO)",
    description:
      "Boost your online presence with targeted SEO strategies that drive web traffic, leads, and sales for sustainable growth.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "PPC",
    description:
      "Maximize your ad reach with our targeted pay-per-click services. We use proven strategies to grow your customer base, generate leads, and boost sales.",
    icon: GlobeAltIcon,
  },
  {
    id: 3,
    name: "Social Media Marketing",
    description:
      "We craft tailored messages that connect your brand with customers, driving visibility and growth through targeted social media strategies.",
    icon: GlobeAltIcon,
  },
  {
    id: 4,
    name: "Facebook Marketing and Advertising",
    description:
      "As India's leading Facebook Marketing company, we consistently optimize your brand's value, driving engagement and growth with targeted campaigns.",
    icon: GlobeAltIcon,
  },
  {
    id: 5,
    name: "Online Reputation Management",
    description:
      "We offer comprehensive brand management and digital marketing solutions to promote and protect your online reputation, ensuring a positive digital presence.",
    icon: GlobeAltIcon,
  },
  {
    id: 6,
    name: "Email Marketing",
    description:
      "Our email marketing services provide targeted campaigns designed to engage specific audiences, driving meaningful connections and boosting conversions.",
    icon: GlobeAltIcon,
  },
];

export const servicesPages = {
  "web-development": {
    heading: "Web Development Services",
    subHeading:
      "Elevate Your Brand with User-Friendly Website Designs and development services",
    desc: `At Acsender, we specialize in creating high-quality websites that combine modern UI with seamless designs, ensuring a user-friendly experience. Our customized web development approach empowers brands worldwide to boost audience engagement and achieve significant returns. Let us help you transform your digital presence and unlock your brand's full online potential!`,
    serviceArrayHeading:
      "Creative Web Design & development Solutions, Built to Impress and Engage",
    servicesArr: WebDevelopment,
    lastImageHeading:
      "The Perfect Website Design & Development Partner for Your Business",
    lastImageDesc:
      "At Acsender, we tailor our website design & development services to fit your unique business needs. Our dedicated team of professionals crafts innovative digital solutions that help you stand out from the competition. Let's elevate your online presence together!",
  },
  "mobile-app-development": {
    heading: "Mobile App Development Services",
    subHeading: "Elevate Your Brand with User-Friendly Website Designs ",
    desc: `In today's digital landscape, establishing a captivating
                  online identity is essential for achieving your business
                  goals. At Acsender, we specialize in crafting high-quality
                  websites that blend modern UI with fluid designs, ensuring a
                  user-friendly experience. Our tailored web development
                  approach has empowered brands globally to enhance audience
                  engagement and realize significant returns. Let us transform
                  your digital presence and unlock your brand's full online
                  potential!`,
    serviceArrayHeading:
      "Creative Mobile App Development & development Solutions, Built to Impress and Engage",
    servicesArr: MobileAppDevelopment,
    lastImageHeading:
      "The Perfect Website Development Partner for Your Business",
    lastImageDesc:
      "At Acsender, we tailor our website design & development services to fit your unique business needs. Our dedicated team of professionals crafts innovative digital solutions that help you stand out from the competition. Let's elevate your online presence together!",
  },
  "seo-digital-marketing": {
    heading: "Digital Marketing",
    subHeading:
      "Transform Your Online Presence with India’s Top Digital Marketing Agency",
    desc: `At Acsender, we drive accelerated growth through top-tier digital marketing services tailored for a global audience. As your dedicated partner, we utilize SEO, PPC, social media marketing, and more, backed by industry expertise. Our team creates engaging content that fuels your marketing funnels, delivering integrated services that act as brand ambassadors and drive tangible results for your business.`,
    serviceArrayHeading:
      "Creative Mobile App Development & development Solutions, Built to Impress and Engage",
    servicesArr: DigitalMarketing,
    lastImageHeading:
      "The Perfect Website Development Partner for Your Business",
    lastImageDesc:
      "At Acsender, we tailor our website design & development services to fit your unique business needs. Our dedicated team of professionals crafts innovative digital solutions that help you stand out from the competition. Let's elevate your online presence together!",
  },
};
