import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const ClearText = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.username) {
      errors.username = "Username is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("api/users/auth/signup", formData);
      toast.success(data.message);
      setLoading(false);
      ClearText();
      navigate("/login");
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="w-full px-5 md:px-0">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-customeRed">Register Form </CardTitle>
          <CardDescription>
            Fill Out the form carefully for registration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                  id="username"
                  placeholder="Enter your Username"
                />
                {error.username && (
                  <p className="text-red-500 text-sm">{error.username}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  id="email"
                  placeholder="Enter your Email"
                />
                {error.email && (
                  <p className="text-red-500 text-sm">{error.email}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  value={formData.password}
                  className="focus-none"
                  placeholder="Enter your password"
                  onChange={handleChange}
                />
                {error.password && (
                  <p className="text-red-500 text-sm">{error.password}</p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Button className="bg-[#e54f47] hover:bg-[#e54f47]-0" type="submit">
                  {loading ? (
                    <svg
                      className="animate-spin border-white border-2 rounded-full h-5 w-5 mr-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      ></path>
                    </svg>
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="justify-center flex items-center text-center">
          Have an account?&nbsp;
          <Link to="/login" className="font-bold text-customeRed">
            Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RegisterForm;
