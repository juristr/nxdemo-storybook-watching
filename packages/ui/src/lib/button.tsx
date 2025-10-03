import styles from './button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({
  variant = 'primary',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles['button']} ${styles[variant]} ${className || ''}`}
      {...props}
    >
      {children}!
    </button>
  );
}

export default Button;
