import { css } from '@emotion/core';
import { useTheme } from 'src/Theme';

export default () => {
    const { $NAME, textColor, backgroundColor, accentColor } = useTheme();

    return {
        themeName: $NAME,

        app: css({
            background: backgroundColor,
            color: textColor,
        }),
        switch: css({
            padding: '1rem',
            border: '0.05rem solid',
            borderColor: textColor,
            cursor: 'pointer',
            userSelect: 'none',
            ':hover': {
                opacity: 0.8
            }
        }),
        buttons: css({
            padding: '1rem',
            borderWidth: '0.05rem',
            borderStyle: 'solid',
            borderColor: accentColor,
        }),
        buttonActiveAt: (themeName: string) => css({
            fontWeight: themeName === $NAME ? 800 : 100,
            padding: '0.25rem',
            cursor: 'pointer',
            userSelect: 'none',
        }),
        content: (isActive: boolean) => css({
            margin: '2rem',
            padding: '1rem',
            borderRadius: '0.25rem',
            fontWeight: 100,
            backgroundColor: isActive ? accentColor : backgroundColor
        })
    }
}