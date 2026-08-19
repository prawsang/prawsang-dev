export const SITE_CONTENT = {
  hero: "Hi! I'm Prawsang, Front-end Developer",
  bio: {
    title: 'Hello there! My name is Prawsang.',
    description:
      'I am a frontend developer based in Bangkok, Thailand. With 7 years of experience in frontend development, I have worked in various organizations, focusing on a variety of industries, such as robotics, social media, and consultancy. Throughout the years, I have experience in a variety of libraries, frameworks, and tools, such as React and Angular.',
    education: {
      institution: 'Chulalongkorn University',
      degree: 'Bachelor of Engineering (Computer Engineering)',
      description: 'Graduated in 2021 | GPA: 3.40 (2nd Class Honors)',
    },
    languages: [
      {
        name: 'English',
        level: 'Fluent',
      },
      {
        name: 'Thai',
        level: 'Native',
      },
    ],
  },
  featuredProjects: [
    {
      title: 'Private UI Library',
      content:
        'This internal Angular UI library was built to give the development team a consistent, dependable foundation for every new client project. Instead of rewriting components from scratch, the library offers solid, reusable building blocks that teams can easily re-style to match each client’s design system. It includes everything from simple elements like buttons, badges, and toast messages, to fully custom form components such as date pickers, time pickers, and comboboxes. The form components integrate cleanly with both Angular Forms and Reactive Forms, making them straightforward to use in any project setup. Unit tests were included for all components to ensure correct functionality across library releases.',
    },
    {
      title: 'Rich Text Editor',
      content:
        'This custom-built rich text editor was designed from the ground up to handle complex formatting while keeping the writing experience smooth, predictable, and fast. It’s powered by ProseMirror and architected in Angular, with a component system that supports real-time styling, dynamic layout behavior, and precise cursor interactions. Every part of the editor, from baseline text rendering to advanced features like auto-lists, tables, automatic page breaks, and free-positioning text boxes and images, was implemented to behave exactly like users expect. Minute details like persisting styles across new paragraphs and selection handling logic was handled to make the user experience seamless.',
    },
    {
      title: 'Geospatial analysis platform',
      content:
        'This geospatial analysis tool was built to take GeoJSON shape data from a legacy system and render it instantly on an interactive map, even when dealing with large or highly detailed geometries. The original approach hit performance limits with complex shapes, so the tool was rebuilt using React and Turf.js to handle spatial processing efficiently on the client side. The result was a dramatic improvement in responsiveness, with shapes appearing immediately and interactions staying smooth. Users can zoom, pan, and inspect shapes without delay, making it easy to interpret boundaries, overlays, and spatial patterns at a glance.',
    },
  ],
  projects: [
    {
      header: 'Dashboards',
      text: 'A web admin dashboard presents key metrics and data through various visualizations, such as pie charts, bar charts, and line graphs, allowing for a customized display of information.',
    },
    {
      header: 'Web admin applications',
      text: 'Applications tailored to manage the custom and specific processes of a corporation, which require extensive access control, form validation,  and handling of large amounts of data.',
    },
    {
      header: 'Data management platforms',
      text: 'Web data management platforms allows users to store, organize, and process files securely. Files and folder are stored and retrieved using a secured cloud service.',
    },
    {
      header: 'Product landing pages',
      text: 'Landing pages advertise a product, featuring bold visuals and sleek animations to make statements, and seamlessly combining modern design elements with engaging content to highlight the product’s key features.',
    },
  ],
  skills: [
    {
      header: 'Front-end Skills',
      skills: [
        'Angular',
        'React',
        'Vue.js',
        'CSS/SCSS',
        'NextJS',
        'Redux',
        'MobX',
        'Storybook',
        'Responsive Web',
        'Turf.js',
        'ProseMirror',
      ],
    },
    {
      header: 'Testing & Quality Assurance',
      skills: [
        'Unit testing',
        'Jasmine + Karma',
        'Jest',
        'React Testing Library',
        'Sonarqube',
      ],
    },
    {
      header: 'Programming Languages/Scripts',
      skills: ['TypeScript/JavaScript', 'Python', 'Java'],
    },
    {
      header: 'Backend & Database',
      skills: ['Database Design', 'SQL', 'PostgreSQL', 'MongoDB', 'Node.js'],
    },
    {
      header: 'Other tools',
      skills: ['Git', 'Figma', 'Jira', 'Webflow', 'Wordpress'],
    },
  ],
  jobExperiences: [
    {
      company: 'IBM Consulting',
      period: '2021 - present',
      position: 'Full-time | Full-stack Developer',
      description: [
        'Delivered large-scale web and mobile solutions for major banks and top companies in Thailand, improving real operational workflows and smoothing out complicated business processes that clients relied on daily.',
        'Built and maintained the company’s Angular UI library, giving developers a solid foundation to launch client projects faster, with consistent styling and reusable components that cut down repetitive work.',
        'Took on unfamiliar technical challenges, researched options, and turned them into working proofs of concept, allowing the team to explore new directions and expand its internal codebase with approaches that hadn’t been used before.',
        'Wrote extensive unit tests that protected the stability of ongoing releases, reducing regression effort and helping the team move faster without breaking existing features.',
      ],
    },
    {
      company: 'AI & Robotics Ventures (ARV)',
      period: '2020 - 2021',
      position: 'Part-time | Front-end Developer',
      description: [
        'Developed various web applications using React for products of various purposes, such as data management and geo-spatial analysis. ',
        'Built a React + Turf.js geospatial tool capable of instantly rendering complicated latitude/longitude shape data from a legacy system, turning raw coordinates into clear visual insights for users.',
        'Created a React-based image management system connected to an AI anomaly detector, letting users browse files, manage data, and view algorithm-flagged issues directly on each image with visual markers.',
        'Designed and built Webflow landing pages that looked polished, performed well, and gave non-technical teammates control over updating text and visuals without needing developer assistance.',
      ],
    },
    {
      company: 'Wongnai Media Co.,Ltd.',
      period: 'June 2020 - July 2020',
      position: 'Intern | Front-end Developer',
      description: [
        'Contributed improvements to the company’s main React (TypeScript) application, a platform with millions of active users, working directly on sections that impacted daily user experience.',
        'Built pixel-perfect pages using the company’s React based private UI library and strict design rules, while also making small improvements to the library where needed.',
        'Implemented automated and unit tests using React Testing Library to comply with strict release standards, consistently hitting 90%+ coverage and ensuring stable deployments.',
      ],
    },
  ],
  contact: {
    email: 'prawsang.c@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/prawsang/',
    github: 'https://github.com/prawsang',
  },
}
