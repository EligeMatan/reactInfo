import React from 'react';
import styles from '@/styles/scss/Sidebar.module.scss';
import loadContent from '../controller/loadContent';

class Sidebar extends React.Component {

    state = { items: [], error: null };

    loadContent();      // <-- ERROR!!!

    render() {
        const { position } = this.props;
        const { items, error } = this.state;

        if (position !== 'right') return null;

        return (
            <section className={styles.Sidebar}>
                <p>Sidebar {position}:</p>

                {error && <p className={styles.error}>Не вдалося завантажити меню</p>}

                <ul>
                    {items.map(({ link, title }, i) => (
                        <li key={i}>
                            <a href={link}>{title}</a>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default Sidebar;
