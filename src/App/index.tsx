/** @jsx jsx */ jsx;
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { setTheme } from 'src/Theme';
import styles from './styles';
import theme from 'src/Theme/dark';

export default () => {
    const [active, setActive] = useState(false);
    const st = styles();

    return (
        <div css={st.app}>
            <div css={st.content(active)}>
                <div css={st.buttons}>
                    <div
                        onClick={() => setTheme('light')}
                        css={st.buttonActiveAt('light')}
                        children="Светло"
                    />
                    <div
                        onClick={() => setTheme('dark')}
                        css={st.buttonActiveAt('dark')}
                        children="Темно"
                    />
                </div>
                <div
                    onClick={() => setActive(!active)}
                    css={st.switch}
                    children={active ? 'ON' : 'OFF'}
                />

            </div>
        </div>
    )
}