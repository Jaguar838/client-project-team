import PropTypes from 'prop-types'
import css from './SectionAuthWrap.module.scss';

const SectionAuthWrap = ({ children }) => {
    return (
        <section className={css.section}>
            <div className={css.container}>
                {children}
            </div>
        </section>
    )
};

SectionAuthWrap.propTypes = {
    children: PropTypes.node,
}


export default SectionAuthWrap;