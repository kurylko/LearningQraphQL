import {useState} from "react";
import {CREATE_USER_MUTATION} from "../GraphQL/Mutation";
import {useMutation} from "@apollo/client";

export const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [createUser, { loading, error }] = useMutation(CREATE_USER_MUTATION, {
        onCompleted: (data) => {
            console.log("User created successfully!", data);
        },
        onError: (error) => {
            console.error("Error creating user:", error);
        },
    });

    const addUser = (e) => {
        e.preventDefault();
        createUser({
            variables: {
                name: name,
                email: email
            },
        });
    };

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <form style={{display: "flex", flexDirection: "column", gap: "20px", marginBottom: "20px"}}>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="email"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />
            </form>
            <button onClick={addUser} style={{width: "fit-content"}} disabled={loading}>Submit</button>
            {error && <p style={{ color: 'red' }}>Error creating user: {error.message}</p>}
        </div>
    )
}