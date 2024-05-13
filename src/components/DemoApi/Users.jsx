import { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import Loader from "./Loader";

const Users = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="flex justify-center p-6">
      <div>
        <Loader />
        <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((user) => (
            <Card key={user.id} className="flex flex-col h-full">
              <CardHeader className="flex flex-col">
                <div className="flex flex-col lg:flex-row gap-x-4 gap-y-4 justify-start items-start lg:items-center">
                  <div className="flex justify-start items-start gap-x-4">
                    <Avatar className="size-14 lg:size-16">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" w-42">
                      <h1 className="w-40 truncate">{user.name}</h1>
                      <p className="text-sm text-black/50">{user.email}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>Username: {user.username}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
                <p>
                  Address: {user.address.street}, {user.address.city}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  variant="primary"
                  className="bg-indigo-500 font-bold rounded-2xl text-white"
                >
                  View
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
