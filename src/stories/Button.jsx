import './button.css';

/**
 * Button component.
 */
export const Button = ({ primary = false }) => {
  const mode = primary ? 'storybook-button-primary' : 'storybook-button-secondary';
  return (
    <button
      type="button"
      className={['storybook-button', mode].join(' ')}
    >
      Button
    </button>
  );
};
