import React from 'react'

import UserItem from './UserItem'
import Card from '../../shared/components/UIElements/Card'
import './UsersList.css'

const UsersList = props => {
    if (props.items.legnth === 0) {
        return (<div classname="center">
            <Card>
            <h2>No Users Found</h2>
            </Card>
        </div>
        );
    } 
    return (
        <ul className="users-list">
            {props.items.map(user => (
                <UserItem key={user.id}
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places}
                />
            ))}
        </ul>
    )
};

export default UsersList;