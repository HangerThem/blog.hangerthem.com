import { IPost } from "../interface/IPost";

export const posts: IPost[] = [
  {
    id: 1,
    date: new Date("2023-08-11"),
    type: "post",
    title: "Well, hello there!",
    content: [
      {
        type: "paragraph",
        content: {
          text: "So this is it - my first blog post, on my own blog. I have been thinking about this for a long time, and now I finally did it. I am not sure how often or what I will write about, but I will try to keep it interesting.",
        },
      },
      {
        type: "paragraph",
        content: {
          text: "But now for a short introduction: My name is Frank Borisjuk also known as HangerThem. I am 19 years old, a software developer from Czechia, currently working at Dreamind as a full-stack developer. I am also a student at PSLIB, where I study computer science.",
        },
      },
      {
        type: "image",
        content: {
          src: "borisjuk_01.png",
          width: 500,
          height: 500,
          alt: "Image",
        },
      },
    ],
  },
  {
    id: 2,
    date: new Date("2023-09-01"),
    type: "post",
    title: "New school year",
    content: [
      {
        type: "paragraph",
        content: {
          text: "So the new school year has started. I am now in my final year of studying computer science at PSLIB. I am looking forward to the new subjects, but I am also a bit worried about the workload.",
        },
      },
      {
        type: "paragraph",
        content: {
          text: "I am also working on a new project, which I will hopefully be able to publish soon. I will write about it in one of the next posts.",
        },
      },
    ],
  },
  {
    id: 3,
    date: new Date("2023-10-02"),
    type: "post",
    title: "September Adventures",
    content: [
      {
        type: "paragraph",
        content: {
          text: "September has been a month filled with a rollercoaster of emotions and experiences. From the excitement of starting a new school year to the ups and downs of personal life, it's been quite a journey.",
        },
      },
      {
        type: "paragraph",
        content: {
          text: "As the new school year began, I found myself diving into the world of academics once again. The challenges of coursework and the pursuit of knowledge have kept me engaged.",
        },
      },
      {
        type: "image",
        content: {
          src: "books_and_laptop.jpg",
          width: 800,
          height: 600,
          alt: "Books and Laptop",
        },
      },
      {
        type: "paragraph",
        content: {
          text: "On the physical front, I've been dedicated to my fitness journey. Regular trips to the gym have allowed me to see noticeable progress, which is always motivating.",
        },
      },
      {
        type: "image",
        content: {
          src: "gym.png",
          width: 800,
          height: 600,
          alt: "Gym Workout",
        },
      },
      {
        type: "paragraph",
        content: {
          text: "Life is a journey filled with its share of ups and downs, and this month has been no exception. Through it all, I've remained introspective and committed to personal growth.",
        },
      },
    ],
  },
  {
    id: 4,
    date: new Date("2023-10-02"),
    type: "quote",
    title: "Something short",
    content: "Life is a marathon, that's why I sprint.",
    author: "HangerThem",
  },
  {
    id: 5,
    date: new Date("2023-10-23"),
    type: "post",
    title: "Starting a Dopamine Detox and Life Update",
    author: "Frank Borisjuk",
    content: [
      {
        type: "paragraph",
        content: {
          text: "Have you ever felt overwhelmed by the constant stream of information and distractions in our digital age? I certainly have. Today, I want to share my journey as I embark on a dopamine detox and provide you with an update on my life. Let's dive in and answer some essential questions.",
        },
      },
      {
        type: "title",
        content: "What is a dopamine detox, and why am I doing it?",
      },
      {
        type: "paragraph",
        content: {
          text: "A dopamine detox is a concept that's gained popularity in recent years. It's a method to reduce exposure to stimulating activities and substances to reset your brain's dopamine receptors. As a software developer, I've found myself constantly glued to screens, and it's affecting my focus and productivity. This detox is a step towards regaining control over my life and improving my mental well-being.",
        },
      },
      {
        type: "title",
        content: "What does my detox plan look like?",
      },
      {
        type: "paragraph",
        content: {
          text: "I'll be cutting down on excessive social media use, video games, and other distractions. Instead, I'll focus on productive activities like programming, reading, and engaging in some hobbies. I tought about finding and trying out even some new hobbies. It's about finding a balance that works for me.",
        },
      },
      {
        type: "list",
        content: [
          "Complete IG purge",
          "YT daily time limiter",
          "No Snapchat (only to keep streaks)",
          "Journaling every evening",
          "5AM alarm every day, go to bed 9-10PM",
          "Cold shower every day (morning or gym)",
          "Productive work before going to school",
          "Gym 5 times a week (Monday to Friday)",
          "Average at least 1h reading a day",
          "Don't eat after 8PM",
          "Meditating at least 10min a day in the morning after morning routine",
          "Don't eat in the morning before productive work",
          "First thing in the morning pain work",
          "Configure phone into minimalistic non distracting design",
          "Complete alcohol and nicotine purge",
          "No junk food",
          "No hookups",
        ],
      },
      {
        type: "title",
        content: "What's new in my life?",
      },
      {
        type: "paragraph",
        content: {
          text: "Besides the detox, I've been working on exciting programming projects. My dedication to self-improvement has been a driving force in my life. I'm also diving deep into my love for fantasy, both through reading and I am also thinking about picking a new hobby. I've been enjoying the process of learning new things and exploring new worlds.",
        },
      },
      {
        type: "image",
        content: {
          src: "me_in_catfe.png",
          width: 800,
          height: 400,
          alt: "Me enjoying some downtime with a green  latte at a cat cafe",
        },
      },
      {
        type: "paragraph",
        content: {
          text: "Last week I also went to a cat cafe with my friends. It was a great experience, and I am looking forward to going there again.",
        },
      },
      {
        type: "title",
        content: "How can you join me on this journey?",
      },
      {
        type: "paragraph",
        content: {
          text: "You're invited to follow my progress on this blog as I share my experiences, challenges, and insights during the detox. If you've been considering a dopamine detox yourself, let's support each other on this quest to regain control over our digital lives and find a healthier balance.",
        },
      },
    ],
  },
];
