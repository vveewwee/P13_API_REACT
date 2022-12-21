import { Fragment } from 'react'
import '../../style/style.css'
import logo from '../../assets/argentBankLogo.png';

const loginPath = "/login";
const homePath = "/home";

export default function Nav(){
    return (
        <Fragment>
            <nav className="main-nav">
                <a className="main-nav-logo" href={homePath}>
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href={loginPath}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
        </Fragment>
    )
}