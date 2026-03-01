import { useTheme } from "../model/ThemeProvider";
import { Button } from "shared";

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            onClick={toggleTheme}
            aria-label={`Переключить тему (текущая: ${theme})`}
            className="theme-switcher"
        >
            {theme == 'light' ? '🌙' : '☀️' }
        </Button>
    );
};