"use client";

import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { emailSignIn, googleSignIn } from "@/lib/client-auth";

export default function Page() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEmailPasswordLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const form = new FormData(e.currentTarget);
      const email = String(form.get("email") || "").trim();
      const password = String(form.get("password") || "");

      const { error } = await emailSignIn(email, password);

      if (error) {
        setError(error.message || "Invalid email or password");
        return;
      }

      toast.success("Signed in successfully");
      router.push("/");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center overflow-hidden p-4 pt-20 pb-6">
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center">
            <h1 className="mb-2 font-medium text-3xl">Welcome to Euler</h1>
            <p className="text-muted-foreground text-sm">Sign in to your account</p>
          </div>

          <form className="flex flex-col gap-6" onSubmit={handleEmailPasswordLogin}>
            <FieldGroup className="rounded-lg p-6">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="xyz@gmail.com"
                  required
                  className="bg-transparent! h-10 rounded-md border border-border text-base focus-visible:border-border focus-visible:ring-0"
                />
              </Field>

              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Link
                    href="#"
                    className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="bg-transparent! h-10 rounded-md border border-border text-base focus-visible:border-border focus-visible:ring-0"
                />
              </Field>

              {error && <p className="text-center text-destructive text-sm">{error}</p>}

              <Field>
                <Button
                  type="submit"
                  className="h-12 w-full cursor-pointer rounded-full text-base text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      Signing in <Loader2 className="ml-2 size-4 animate-spin" />
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </Field>

              <div className="relative my-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-border border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <Field>
                <Button
                  type="button"
                  onClick={googleSignIn}
                  className="flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full text-base text-primary-foreground"
                >
                  <Image
                    src="/icons/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                    className="size-5"
                  />
                  Continue with Google
                </Button>
              </Field>

              <p className="text-center text-muted-foreground text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/signup" className="transition-colors hover:text-foreground">
                  Sign up
                </Link>
              </p>
            </FieldGroup>
          </form>
        </div>
      </div>

      <p className="mt-6 shrink-0 text-center text-muted-foreground text-sm">
        By signing in you agree to our{" "}
        <Link
          href="#"
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Terms
        </Link>{" "}
        &amp;{" "}
        <Link
          href="#"
          className="underline underline-offset-4 transition-colors hover:text-foreground"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
