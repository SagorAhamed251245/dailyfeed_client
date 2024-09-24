import BlockSvg from "@/components/shared/SVG/BlockSvg";
import Comment from "@/components/shared/SVG/Comment";
import Heart from "@/components/shared/SVG/Heart";
import MoreSvg from "@/components/shared/SVG/MoreSvg";
import SharedSvg from "@/components/shared/SVG/SharedSvg";
import SubscribeSvg from "@/components/shared/SVG/SubscribeSvg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const PostCards = () => {
  return (
    <section className="mt-5 space-y-5">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Card key={index} className="grid grid-cols-6 grid-rows-3 ">
          <div className="col-span-4 row-span-3">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User gavater"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Author Name</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="w-full text-xl line-clamp-2">
                This is a tile for bloge Lorem, ipsum dolor sit amet consectetur
                adipisicing elit
              </CardTitle>
              <CardDescription className="line-clamp-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                animi, sed quia temporibus nisi quam repudiandae soluta quasi
                distinctio aspernatur iste debitis facere fuga reiciendis
                reprehenderit commodi nesciunt quod minima tempore placeat.
                Ullam, totam earum praesentium cupiditate iusto debitis fuga?
              </CardDescription>
              <span className="text-xs cursor-pointer text-linkColor hover:text-linkHoverColor">
                See more
              </span>
            </CardContent>
            <CardFooter>
              <div className="flex w-full">
                <div className="flex items-center gap-2 grow">
                  <p className="text-xs text-muted-foreground">Just now</p>
                  <Heart />
                  <Comment />
                  <SharedSvg />
                </div>
                <div className="flex gap-2">
                  <BlockSvg />
                  <SubscribeSvg />
                  <MoreSvg />
                </div>
              </div>
            </CardFooter>
          </div>
          <CardHeader className="h-full col-span-2 row-span-3 rounded-xl">
            <Image
              src={
                "https://images.unsplash.com/photo-1514820402329-de527fdd2e6d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Bloge image"
              width={1080}
              height={718}
              className="w-full h-full rounded-lg"
            />
          </CardHeader>
        </Card>
      ))}
    </section>
  );
};

export default PostCards;
