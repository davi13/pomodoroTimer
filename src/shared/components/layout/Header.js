import React from 'react';
//Composents
import logo from '../../images/logo.svg'
//PropTypes
import PropTypes from 'prop-types';

const Header = props => {
    const {
        title = 'Welcome to React',
        url = 'http://localhost:3000'
    } = props;

    return (
        <header className="App-header">
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>
            <h1 className="App-title">{title}</h1>
        </header>

    );
};

Header.prototype = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}
// class Header extends Component {
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         url: PropTypes.string
//     }
//     render() {
//         const {
//             title = 'Welcome to React',
//             url = 'http://localhost:3000'
//         } = this.props
//         return (
//             <header className="App-header">
//                 <a href={url}>
//                     <img src={logo} className="App-logo" alt="logo" />
//                 </a>
//                 <h1 className="App-title">{title}</h1>

//             </header>
//         )
//     }
// }

export default Header;
