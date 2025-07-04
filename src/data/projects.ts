import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes product management, cart functionality, and payment processing with Stripe.',
    image: 'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates. Features include task assignments, due dates, and progress tracking.',
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather application that provides current weather data and forecasts for any location. Utilizes OpenWeatherMap API and geolocation.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'API Integration', 'Geolocation', 'CSS3'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and TypeScript. Features dark mode, animations, and contact form.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A content management system for creating and managing blog posts. Includes user authentication, rich text editing, and comment functionality.',
    image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Auth.js'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '6',
    title: 'Fitness Tracker',
    description: 'A mobile-first application for tracking workouts and fitness progress. Features include workout plans, progress charts, and social sharing.',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
];
