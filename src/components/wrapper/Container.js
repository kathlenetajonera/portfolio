const Container = ({ title, children }) => {
    return ( 
        <div className="container">
            <h1 className="container__title">{ title }</h1>

            { children }
        </div>
    );
}
 
export default Container;