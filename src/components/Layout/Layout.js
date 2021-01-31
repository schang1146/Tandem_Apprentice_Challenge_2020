import './Layout.scss';

function Layout({ children, style }) {
    return (
        <div className='layout-wrapper' style={style}>
            {children}
        </div>
    );
}

export default Layout;
