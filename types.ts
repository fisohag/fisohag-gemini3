import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  tech: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}