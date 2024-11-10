
import { useEffect } from 'react';

const Navigation = () => {
    useEffect(() => {
        // Effect logic here
    }, [resetWidth]); // Added resetWidth as per warning

    return <div>Navigation Component</div>;
};

export default Navigation;
