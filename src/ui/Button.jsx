import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block outline-none tracking-wide bg-yellow-400 hover:bg-yellow-300 focus:bg-yellow-300 disabled:bg-stone-200 text-stone-800 uppercase disabled:text-stone-400 focus:outline-none font-semibold rounded-full text-sm focus:ring focus:ring-yellow-300 focus:ring-offset-2 transition-all duration-300';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-3 py-1  md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm font-semibold border-2 outline-none border-stone-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 disabled:bg-stone-100 text-stone-400 disabled:text-stone-400 text-sm rounded-full focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disable:cursor-not-allowed transition-all duration-300 px-4 py-2.5 md:px-6 md:py-3.5 uppercase',
      round: base + ' px-2.5 py-1  md:px-3.5 md:py-2 text-sm ',
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
