import Icon from './Icon.jsx';

/**
 * Link-styled button. Renders <a> when `href` is given, otherwise <button>.
 * variant: 'primary' | 'ghost'
 */
export default function Button({ href, variant = 'primary', icon, children, ...rest }) {
  const className = `btn btn--${variant}`;
  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} />}
    </>
  );

  if (href) {
    return (
      <a className={className} href={href} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={className} {...rest}>
      {content}
    </button>
  );
}
