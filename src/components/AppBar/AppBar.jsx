import { AuthNav } from 'components/AuthNav/AuthNav';
import css from './AppBar.module.css';
import { Navigation } from 'components/Navigation/Navigation';
import { useAuth } from 'hooks';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
