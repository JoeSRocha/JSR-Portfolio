import PropTypes from 'prop-types'
import Link from 'next/link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link href="/"><a><span onClick={props.onToggleMenu}>Home</span></a></Link></li>
                <li><Link href="/latest"><a><span onClick={props.onToggleMenu}>Latest</span></a></Link></li>
                <li><Link href="/ucla"><a><span onClick={props.onToggleMenu}>UCLA</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Front-end Development</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Back-end Development</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>DevOps</span></a></Link></li>
                <li><Link href="/elements"><a><span onClick={props.onToggleMenu}>Previous Work</span></a></Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
