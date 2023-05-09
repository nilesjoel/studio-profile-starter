
import { useSession } from "next-auth/react"

export  const isAuthenticated = async () => {
    const [session, loading] = useSession();
    return session && !loading;
    
}