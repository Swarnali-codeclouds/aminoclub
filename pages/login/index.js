import AuthLayout from "@/components/AuthLayout";
import AuthVisual from "@/components/AuthVisual";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout visual={<AuthVisual />}>
      <LoginForm />
    </AuthLayout>
  );
}