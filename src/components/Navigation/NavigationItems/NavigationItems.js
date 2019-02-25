import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <div>
        {props.isAuthenticated ? (
            <NavigationItem link="/streamer" exact>
                STREAMER
            </NavigationItem>
        ) : (
            <NavigationItem link="/" exact>
                LOGIN
            </NavigationItem>
        )}

        {props.isAuthenticated ? (
            <NavigationItem link="/logout" exact>
                LOGOUT
            </NavigationItem>
        ) : null}
    </div>
);

export default navigationItems;
