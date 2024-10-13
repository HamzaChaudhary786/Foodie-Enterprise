import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

export const useCreateMyUser = () => {

    const { getAccessTokenSilently } = useAuth0();


    const createMyUserRequest = async (user: CreateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create user');
        }

        return response.json();
    };

    const { mutateAsync: createUser, isLoading, isError, isSuccess } = useMutation(createMyUserRequest);

    return {
        isLoading,
        isError,
        isSuccess,
        createUser,
    };
};


type UpdateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};


export const useUpdateMyUser = () => {

    const { getAccessTokenSilently } = useAuth0();


    const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {


        const accessToken = await getAccessTokenSilently();


        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update user');
        }

        return response.json();
    };

    const { mutateAsync: updateUser, isLoading, isError, isSuccess, error, reset } = useMutation(updateMyUserRequest);

    return {
        isLoading,
        isError,
        isSuccess,
        updateUser,
        error,
        reset,
    };
};
