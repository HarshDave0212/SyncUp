import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";

const useSignup = () => {
    const queryClient = useQueryClient(); // proper query client instance

    const {
      mutate,
      isPending,
      error,
    } = useMutation({
      mutationFn: signup,
      onSuccess: () =>
        queryClient.invalidateQueries({ queryKey: ["authUser"] }),
    });
    return {error,isPending, signupMutation: mutate};
}

export default useSignup;