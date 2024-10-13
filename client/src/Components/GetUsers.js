import {useQuery, gql} from "@apollo/client";
import {LOAD_USERS} from "../GraphQL/Queries";
import {useEffect, useState} from "react";

export const GetUsers = () => {
    const {error, loading, data} = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log(data);
        setUsers(data?.getAllUsers);
    }, [data])

    if(!users){
        return null
    }

    return (
        <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
            {users.map((user) =>
                <div key={user.id} style={{display: "flex", gap: "20px"}}>
                    <p>{`id: ${user.id} `}</p>
                    <p>{`name: ${user.name}`}</p>
                    <p>{`email: ${user.email}`}</p>
                </div>
                )}
        </div>
    )
}