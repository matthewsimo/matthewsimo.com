import ToggleDarkModeButton from './ToggleDarkModeButton';
import Link from './Link';

export default function Attribution({ className }) {
  return (
    <div className={className}>
      <Link href="http://twitter.com/matthewsimo">@matthewsimo</Link>
      <ToggleDarkModeButton className="hover:text-main-400 hover:drop-shadow-md transition-shadow transition-colors duration-200 ease-in-out" />
    </div>
  );
}
