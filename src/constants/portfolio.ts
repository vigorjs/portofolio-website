import type { Portfolio } from "@/types";

export const portfolioList: Portfolio[] = [
  {
    title: "Pegadaian Sistem Inventaris",
    imageThumbnail: "/assets/images/project-pesiris.PNG",
    description:
      "Web Inventory Management System integrated with QRcode made using MySql, Bootstrap and PHP native as my final project while interning at PT.Pegadaian.",
    livePreviewURL: "https://pesiris.my.id",
    repositoryURL: "https://github.com/vigorjs/PESIRIS",
    techStack: [
      {
        tech: "PHP",
        logo: "/assets/svg/php.svg",
      },
      {
        tech: "Mysql",
        logo: "/assets/svg/mysql.svg",
      },
      {
        tech: "Bootstrap",
        logo: "/assets/svg/bootstrap.svg",
      },
    ],
  },
  {
    title: "E-commerce Store",
    imageThumbnail: "/assets/images/project-02.PNG",
    description:
      "Fullstack E-commerce store allows the user to buy the product with Stripe payment that you make in Ecommerce-admin. The content in this application is dynamically customized in the Ecommerce-admin too.",
    livePreviewURL: "https://ecommerce-store-delta-eight.vercel.app/",
    repositoryURL: "https://github.com/inifarhan/ecommerce-store",
    techStack: [
      {
        tech: "Next JS",
        logo: "/assets/svg/next js.svg",
      },
      {
        tech: "Typescript",
        logo: "/assets/svg/typescript.svg",
      },
      {
        tech: "Stripe",
        logo: "/assets/svg/stripe.svg",
      },
      {
        tech: "Mysql",
        logo: "/assets/svg/mysql.svg",
      },
    ],
  },
  {
    title: "REST API with JWT Authentication",
    imageThumbnail: "/assets/images/project-03.png",
    description:
      "A REST API is an application for backend that provides users to login using JWT, it also includes pagination to GET data for better performance",
    livePreviewURL: "https://github.com/inifarhan/rest-api-with-jwt-and-pagination",
    repositoryURL: "https://github.com/inifarhan/rest-api-with-jwt-and-pagination",
    techStack: [
      {
        tech: "Express JS",
        logo: "/assets/svg/express.svg",
      },
      {
        tech: "Node JS",
        logo: "/assets/svg/node js.svg",
      },
      {
        tech: "JWT",
        logo: "/assets/svg/jwt.svg",
      },
      {
        tech: "Javascript",
        logo: "/assets/svg/javascript.svg",
      },
    ],
  },
];
