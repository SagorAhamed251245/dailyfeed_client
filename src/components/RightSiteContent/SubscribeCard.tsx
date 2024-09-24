import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SubscribeCard = () => {
  return (
    <Card className="w-full mb-5">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">
          To explore your Knowledge stay with us
        </CardTitle>
        <CardDescription>
          We have the vision to provide the content you desire.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col space-y-1.5">
            <Input
              id="name"
              type="email"
              placeholder="To get updates from notisub please subscribe"
              className="text-center rounded-full"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center ">
        <Button>Subscribe</Button>
      </CardFooter>
    </Card>
  );
};

export default SubscribeCard;
