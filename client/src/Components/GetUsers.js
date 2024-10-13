import {useQuery, gql} from "@apollo/client";
import {LOAD_USERS} from "./../GraphQL/Queries";
import {useEffect} from "react";

export const GetUsers = () => {
    const {error, loading, data} = useQuery(LOAD_USERS);

    useEffect(() => {
        console.log(data);
    }, [data])

    if(!data || !data.getAllUsers){
        return null
    }

    return (
        <div style={{display: "flex", flexDirection: "column", marginLeft: "20px"}}>
            {data && data.getAllUsers.map((user) =>
                <div key={user.name} style={{display: "flex", gap: "20px"}}>
                    <p>id: {user.id} </p>
                    <p>name:{user.name}</p>
                    <p>email:{user.email}</p>
                </div>
                )}
        </div>
    )
}