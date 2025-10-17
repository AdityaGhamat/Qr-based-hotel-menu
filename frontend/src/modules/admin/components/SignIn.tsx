import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import FormField from "@/modules/common/components/FormField";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { signin } from "../types/SignIn.type";
import { signInSchema } from "../schema/signin.schema";
import { useNavigate } from "react-router";

const SignIn = () => {
  const navigate = useNavigate();
  const form = useForm<signin>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function simulateSignIn(data: signin): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email.includes("test")) {
          resolve(`Welcome, ${data.name}!`);
        } else {
          reject("Invalid email or server error.");
        }
      }, 2000);
    });
  }

  async function onSubmit(data: signin) {
    toast.promise(simulateSignIn(data), {
      loading: (
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 animate-spin text-blue-500"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Signing you in...
        </div>
      ),
      success: (message: string) => {
        navigate("/otp");
        return (
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-green-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div>
              <span className="font-medium">{message}</span>
              <p className="text-sm text-gray-600">You're now logged in!</p>
            </div>
          </div>
        );
      },
      error: (error) => (
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <span className="font-medium">Sign-in failed!</span>
            <p className="text-sm text-gray-600">{String(error)}</p>
          </div>
          <button
            className="ml-auto text-sm text-blue-600 hover:underline"
            onClick={() => form.reset()}
          >
            Try Again
          </button>
        </div>
      ),
      classNames: {
        toast:
          "bg-gradient-to-r from-blue-100 to-purple-100 border-l-4 border-blue-500 shadow-lg",
        success: "bg-green-50 text-green-800 border-green-500",
        error: "bg-red-50 text-red-800 border-red-500",
      },
      duration: 5000,
    });
  }

  return (
    <Card className="w-full max-w-sm bg-white/90 shadow-lg rounded-lg backdrop-blur-sm ubuntu-regular">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 ubuntu-bold">
          Sign In
        </CardTitle>
        <CardDescription className="text-gray-600">
          Enter your details to sign in to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormItem>
              <div className="grid gap-2">
                <FormLabel className="text-sm font-medium text-gray-700 ubuntu-bold">
                  Name
                </FormLabel>
                <FormControl>
                  <FormField
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    register={form.register}
                    error={form.formState.errors.name}
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-500" />
              </div>
            </FormItem>
            <FormItem>
              <div className="grid gap-2">
                <FormLabel className="text-sm font-medium text-gray-700 ubuntu-bold">
                  Email
                </FormLabel>
                <FormControl>
                  <FormField
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    register={form.register}
                    error={form.formState.errors.email}
                  />
                </FormControl>
                <FormMessage className="text-sm text-red-500" />
              </div>
            </FormItem>
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SignIn;
