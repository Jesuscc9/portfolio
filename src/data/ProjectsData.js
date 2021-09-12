export const ProjectsData = [
  {
    name: "Reviewsic",
    description: `Reviewsic is a place where you can share your favorite music with
	everyone, and also interact with other’s reviews.`,
    shortName: "reviewsic",
    images: ["/Reviewsic/PC.gif", "/Reviewsic/Phone.gif"],
    link: "https://reviewsic.herokuapp.com/",
    github: "https://github.com/Jesuscc9/Reviewsic",
    date: {
      from: "Dec 2020",
      to: "Now",
    },
    role: "Creator",
    tools: [
      ["React JS", "Hooks", "Redux"],
      ["Node JS", "Socket.io", "Express"],
      ["Reviewsic Rest API", "Spotify API", "MySql"],
      ["Git", "Github"],
      ["Heroku Hosting"],
    ],
    challenge: `The main challenge on this project was to make the Sockets work, because there is a lot of data to care about, for example when you are watching a specific review and someone deletes that review and that route do not exist more. Another tricky thing was the Spotify Player with the SDK, because it is actually a library, and style it was difficult, but with help of hard CSS I could done it.`,
    features: ["Real Time", "Responsive", "Animated"],
  },
  {
    name: "Physiology",
    description: `Students of medicine use different devices to make different measurements
    in their practices, and this app allows them to see their devices data and make some
    calculus with it.`,
    shortName: "physiology",
    images: ["/physiology/dashboard.jpg"],
    date: {
      from: "Sep 2021",
      to: "Now",
    },
    role: "Creator",
    tools: [
      ["React JS", "Hooks", "Redux", "Apex Charts"],
      ["Node JS", "Express", "Node FTP Client"],
      ["Rest API", "MySql"],
      ["Git", "Github"],
      ["Heroku Hosting"],
    ],
    challenge: `I didn't have really big problems, but the hardest part was to relate all the components that act over the chart, and the components that are feed by the chart, but after realizing the problem I decided to use Redux, and that made the work easier :).`,
    features: ["Responsive", "Animated", "Dashboard for students and teachers"],
  },
  {
    name: "Camera App",
    description: `This app allows to the users to capture exact frames of the video
	of your camera, using different algorithms and AI libraries.`,
    shortName: "camera",
    images: ["/physiology/dashboard.jpg"],
    date: {
      from: "March 2019 - Now",
      to: "Now",
    },
    role: "Creator",
    tools: [
      ["HTML", "CSS", "PHP", "JavaScript"],
      ["MySql"],
      ["Git", "Github"],
      ["Cloud Server on Hostinger"],
    ],
    challenge: `I faced a lot of issues, because back then, my knowledge was very poor, the first one was that each image must have to be saved in their original resolution, and an average mobile picture may be very heavy, and I tought that it was a good idea to save the binary files directlly on my database 🙃, then I realize my error and change that to save my images in my server and the directory on my database. I recently had to transfer all the files from one server to another completely new, because the first one was very slow, at the moment we have register more than 4000 of registers and images. The second problem was the compatibility through all the devices, android, iphone and also in the different browsers as Chrome and Safari. And the last one was that the Media Devices API is kind of new, and there are a lot of different screen sizes and camera resolutions that I had to support and adapt.`,
    features: ["Responsive", "Compatibility"],
  },
  {
    name: "COVID-19 RV",
    description: `This platform, simulates practices in COVID-19 real areas but in virtual reality. Allowing medicine students to get experience without risk.`,
    shortName: "covid",
    images: ["/physiology/dashboard.jpg"],
    link: "https://reviewsic.herokuapp.com/",
    github: "https://github.com/Jesuscc9/Reviewsic",
    info: "https://puntou.uanl.mx/somos-uni/capacitan-con-realidad-virtual-a-personal-medico-en-areas-covid/",
    date: {
      from: "March 2020",
      to: "Now",
    },
    role: "3D Designer and Programmer",
    tools: [
      ["Unity 3D", "Oculus Rift S", "Blender", "C#"],
      ["HTML", "CSS", "JavaScript", "PHP"],
      ["Unity MySql", "MySql"],
      ["Git", "Github"],
      ["Cloud Server Hostinger"],
    ],
    challenge: `The hardest part of this project was to make all our app align to the different guidlines about COVID-19, and learn from 0 how to make virtual reality experiences. We also had to make some interviews with the nursing staff to know the real needs.`,
    features: ["Virtual Reality", "Inmersive"],
  },
  {
    name: "Smart Lights",
    description: `In order to  controll personal flow between the different hospital areas, this app allows to turn on the light of  a medical barrier light, when to turn on and how many time it will be on`,
    shortName: "lights",
    images: ["/physiology/dashboard.jpg"],
    link: undefined,
    github: undefined,
    info: undefined,
    date: {
      from: "April 2020",
      to: "October 2020",
    },
    role: "Web App Creator",
    tools: [
      ["HTML", "CSS", "JavaScript"],
      ["Sockets", "PubNub Server"],
      ["Git", "Github"],
      ["Cloud Server Hostinger"],
    ],
    challenge: `The hardest part of this project was to make all our app align to the different guidlines about COVID-19, and learn from 0 how to make virtual reality experiences. We also had to make some interviews with the nursing staff to know the real needs.`,
    features: ["Virtual Reality", "Inmersive"],
  },
  {
    name: "LPDLA",
    description: `This is an web app to see the stats of my League of Legends team (my friends) using the  Riot API.`,
    shortName: "lpdla",
    images: ["/physiology/dashboard.jpg"],
    link: "https://dissoftec.com",
    github: "https://github.com/Jesuscc9/LPDLA-App",
    date: {
      from: "Sep 2021",
      to: "Now",
    },
    role: "Creator",
    tools: [
      ["React JS", "Hooks", "Redux"],
      ["Riot API"],
      ["Git", "Github"],
      ["Heroku Hosting"],
    ],
    challenge: `The hardest part of this project, was to work along the Riot API, it is a disaster, it is very confusing the properties of the objects, they changes between each endpoint, for example, when you fetch the matches, the "id" of a champion is in the propertie "champion", and when you fetch all the champion the "id" of a champion is the name of the champion, and the id is named "key" 😕. The API uses for the positions the common keywords as mid, bottom, jungle, etc, but when you want to fetch the images, you have to use words like "middle", "utility", "bottom", and its make the work harder. And these type of situations are all around the API! I also learned a lot more about error handle.`,
    features: ["Responsive", "Animated"],
  },
];

export const OthersProjects = [
  `A web client to display the value and the progress of a
temperature sensor during the day, and send notifications if the
temperature change suddenly.`,
  `A web app to detect floods with an humidity sensor using an
arduino that communicates with a web server. I made the arduino
part too 😳.`,
  `A web application to select two areas of an image, and see their RGB data in charts using Canvas API.`,
  `Multiple responsive websites and a lot of CRUDS with PHP and some others with Node.js and Express.`,
];
