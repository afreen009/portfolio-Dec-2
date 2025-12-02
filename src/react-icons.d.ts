import { IconType } from 'react-icons';
import { FC, SVGProps } from 'react';

declare module 'react-icons/fi' {
  export const FiGithub: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiLinkedin: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiTwitter: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiArrowDown: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiExternalLink: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiMail: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiMapPin: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiPhone: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FiSend: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
}

declare module 'react-icons/fa' {
  export const FaReact: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FaNodeJs: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FaGitAlt: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const FaDocker: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
}

declare module 'react-icons/si' {
  export const SiTypescript: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const SiNextdotjs: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const SiGraphql: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const SiTailwindcss: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const SiRedux: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const SiMongodb: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const SiPostgresql: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
  export const SiAmazonwebservices: FC<SVGProps<SVGSVGElement> & { size?: number | string }>;
}

declare module 'react-icons' {
  export type IconType = FC<SVGProps<SVGSVGElement> & { size?: number | string; color?: string }>;
}

