import AuthLayout from "@/components/AuthLayout";
import AuthVisual from "@/components/AuthVisual";
import SignupForm from "@/components/SignupForm";

export default function AccountPage() {
  return (
    <AuthLayout visual={<AuthVisual />}>
      <SignupForm />
    </AuthLayout>
  );
}