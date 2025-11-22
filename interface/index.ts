// interfaces for Button
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// interface for Layout
export interface LayoutProps {
  children: React.ReactNode;
}

// interface for Home Page (if needed)
export interface HomeProps {
  title?: string;
}