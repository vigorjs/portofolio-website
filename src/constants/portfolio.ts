import type { Portfolio } from "@/types";

export const portfolioList: Portfolio[] = [
  {
    title: "Pegadaian Sistem Inventaris",
    imageThumbnail: "/assets/images/project-pesiris.png",
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
    title: "eFootball League",
    imageThumbnail: "/assets/images/project-efootball.png",
    description:
      "Learning how to create a simple information website using Laravel + adminlte.",
    livePreviewURL: "https://github.com/vigorjs/Football_League_Laravel",
    repositoryURL: "https://github.com/vigorjs/Football_League_Laravel",
    techStack: [
      {
        tech: "Laravel",
        logo: "/assets/svg/laravel.svg",
      },
      {
        tech: "Admin LTE",
        logo: "/assets/svg/adminlte.svg",
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
