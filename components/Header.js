import headerStyles from '../styles/Header.module.css';

const Header = () => {
    // const x = 5; // Used just for example
    return (
        <div>
            {/*<h1 className={'title'}>
                <span>WebDev</span> News
            </h1>
            <style jsx>
                {`
                  .title {
                    color: ${x > 3 ? 'red' : 'blue'};
                  }
                `}
            </style>*/}
            <h1 className={headerStyles.title}>
                <span>Web Dev</span> News
            </h1>
            <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
        </div>
    );
};

export default Header;
