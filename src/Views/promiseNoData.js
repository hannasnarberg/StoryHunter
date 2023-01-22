function promiseNoData(className, promise, data, error) {
    if (promise) {
        if (data) return false;
        else {
            if (error) return <span>{error}</span>;
            else {
                return (
                    <img
                        className={className}
                        alt="loading gif"
                        src={'https://www.inspiredled.com/wp-content/plugins/fyrelazyload/assets/img/loader.gif'}
                    ></img>
                );
            }
        }
    }
    return <span>no data</span>;
}

export default promiseNoData;
