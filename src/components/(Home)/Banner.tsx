import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Banner = () => {
  return (
    <Card className="w-full mb-5">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">
          Your Daily Dose of Insights: News, Trends, & Inspiration
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
              placeholder="To get Updated SUbscribe Notisub"
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

export default Banner;
