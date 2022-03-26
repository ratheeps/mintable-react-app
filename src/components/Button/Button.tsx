import classNames from 'classnames';
import {Props} from "./types"

function Button({ type = 'primary', children }: Props) {
  return (
    <button
      type="button"
      className={classNames(
        'px-6 py-3 inline-flex items-center border border-transparent text-xs font-medium rounded text-white',
        {
          'bg-red-600 hover:bg-red-700': type === 'danger',
          'bg-indigo-600 hover:bg-indigo-700': type === 'primary',
          'bg-orange-600 hover:bg-orange-700': type === 'warning',
        }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
