import { User } from "@/lib/redux/api/users";

export const login = async (email: string, password: string) => {
  try {
    const result = await fetch(
      "http://localhost:8000/api/v1/login/access-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Correct the Content-Type value
        },
        body: new URLSearchParams({
          username: email,
          password: password,
        }).toString(), // Convert the URLSearchParams object to a string
      }
    );

    if (!result.ok) {
      // If the response status is not okay (2xx range), handle the error
      alert("Wrong email or password");
      throw new Error("Failed to log in");
    }

    const json = await result.json();

    // Assuming the JSON response contains the 'access_token' field
    const accessToken = json.access_token;

    // Store the access token in localStorage
    localStorage.setItem("accessToken", accessToken);

    // Return the JSON response
    return accessToken;
  } catch (error) {
    // Handle any errors that occur during the login process
    console.error("Error during login:", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

interface LoginResponse {
  accessToken: string;
  user: User;
}

export const fetchLoginData = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const accessToken = await login(email, password);
    const response = await fetch("http://localhost:8000/api/v1/users/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return { accessToken, user: await response.json() };
  } catch (error) {
    console.log(error);
  }
  throw new Error("Failed to login");
};
