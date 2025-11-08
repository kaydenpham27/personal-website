import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Typography from "@/components/ui/typography";
import React from "react";

const ContactForm = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[20%_70%_10%] pl-40 pr-40 space-x-4">
      <div className="flex flex-col items-end pr-4 space-y-2">
        <Label htmlFor="name">
          <Typography.H3> Name: </Typography.H3>
        </Label>
        <Label htmlFor="email">
          <Typography.H3> Email: </Typography.H3>
        </Label>
        <Label htmlFor="message">
          <Typography.H3> Message: </Typography.H3>
        </Label>
      </div>
      <div className="flex flex-col space-y-2">
        <Input
          id="name"
          className="border-2"
          placeholder="K., P."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          id="email"
          className="border-2"
          placeholder="someone@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Textarea
          id="message"
          className="border-2"
          placeholder="Hey Kien, ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        variant="outline"
        className="w-full self-end"
        onClick={() => {
          setName("");
          setEmail("");
          setMessage("");
        }}
      >
        <Typography.Medium>Send</Typography.Medium>
      </Button>
    </div>
  );
};

export const ContactMeCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Typography.H1> Contact </Typography.H1>
        </CardTitle>
        <CardDescription>
          <Typography.Large>
            {" "}
            I'm open for any opportunities, please shoot me a message!{" "}
          </Typography.Large>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  );
};
