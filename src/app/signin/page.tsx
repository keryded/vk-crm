
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("vk", {redirectTo: '/dashboard'})
      }}
    >
      <button type="submit">Signin with VK</button>
    </form>
  )
} 