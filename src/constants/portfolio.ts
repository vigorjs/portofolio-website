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
    title: "Vehicle Booking System",
    imageThumbnail: "/assets/images/project-vehicle-booking-system.png",
    description:
      "Personal Project App Pemesanan Kendaraan menggunakan Laravel + Stisla",
    livePreviewURL: "https://github.com/inifarhan/rest-api-with-jwt-and-pagination",
    repositoryURL: "https://github.com/inifarhan/rest-api-with-jwt-and-pagination",
    techStack: [
      {
        tech: "Laravel",
        logo: "/assets/svg/laravel.svg",
      },
      {
        tech: "Stisla",
        logo: "/assets/svg/stisla.svg",
      },
      {
        tech: "Mysql",
        logo: "/assets/svg/mysql.svg",
      }
    ],
  },
];
