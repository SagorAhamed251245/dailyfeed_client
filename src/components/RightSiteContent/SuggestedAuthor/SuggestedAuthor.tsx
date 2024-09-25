import GlobalCard from "@/components/shared/GlobalCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { TAuthorUser } from "@/types";

const SuggestedAuthor = () => {
  const authors: TAuthorUser[] = [
    {
      _id: "64f2b6c1a93e4f01b7654310",
      name: "John Doe",
      profession: "Software Engineer",
      userId: "64f2b6c1a93e4f01b7654311",
      role: "author",
      shortAboutYou:
        "A passionate software engineer and open-source enthusiast.",
      bio: "John has been working in the software industry for over 10 years, contributing to multiple open-source projects and building scalable applications.",
      profilePictureUrl: "https://github.com/shadcn.png",
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        website: "https://johndoe.dev",
      },
      createdAt: "2023-01-15T08:30:00Z",
      updatedAt: "2023-08-10T09:45:00Z",
    },
    {
      _id: "64f2b6c1a93e4f01b7654312",
      name: "Jane Smith",
      profession: "Technical Writer",
      userId: "64f2b6c1a93e4f01b7654313",
      role: "author",
      shortAboutYou:
        "An experienced technical writer who loves simplifying complex topics.",
      bio: "Jane specializes in writing detailed technical documentation, making complex concepts easy to understand for both beginners and experts.",
      profilePictureUrl: "https://github.com/shadcn.png",
      socialLinks: {
        linkedin: "https://linkedin.com/in/janesmith",
      },
      createdAt: "2022-05-23T12:15:00Z",
    },
    {
      _id: "64f2b6c1a93e4f01b7654314",
      name: "Alice Johnson",
      profession: "UX Designer",
      userId: "64f2b6c1a93e4f01b7654315",
      role: "author",
      shortAboutYou:
        "UX designer focused on creating intuitive user experiences.",
      bio: "Alice has worked with top-tier companies to improve the usability and accessibility of digital products, ensuring a seamless experience for users.",
      profilePictureUrl: "https://github.com/shadcn.png",
      socialLinks: {
        twitter: "https://twitter.com/alicejohnsonux",
        website: "https://alicejohnsonux.com",
      },
      createdAt: "2023-07-01T14:00:00Z",
      updatedAt: "2023-07-20T16:30:00Z",
    },
    {
      _id: "64f2b6c1a93e4f01b7654316",
      name: "Michael Thompson",
      profession: "Full-Stack Developer",
      userId: "64f2b6c1a93e4f01b7654317",
      role: "author",
      shortAboutYou:
        "Full-stack developer with a passion for building web applications.",
      bio: "Michael has been a part of various startups, helping to create innovative web solutions from the ground up. He specializes in JavaScript, Node.js, and React.",
      profilePictureUrl: "https://github.com/shadcn.png",
      socialLinks: {
        twitter: "https://twitter.com/mthompsondev",
        linkedin: "https://linkedin.com/in/michaelthompson",
      },
      createdAt: "2021-11-15T10:30:00Z",
      updatedAt: "2023-01-20T12:45:00Z",
    },
    {
      _id: "64f2b6c1a93e4f01b7654318",
      name: "Emily Davis",
      profession: "Data Scientist",
      userId: "64f2b6c1a93e4f01b7654319",
      role: "author",
      shortAboutYou:
        "Data scientist with a focus on machine learning and big data analytics.",
      bio: "Emily has worked on several AI-driven projects, focusing on predictive analytics and machine learning models to solve complex business problems.",
      profilePictureUrl: "https://github.com/shadcn.png",
      socialLinks: {
        twitter: "https://twitter.com/emilydavisds",
        website: "https://emilydavis.ai",
      },
      createdAt: "2020-09-25T13:15:00Z",
      updatedAt: "2022-08-05T14:45:00Z",
    },
  ];

  const AuthorComp = () => {
    return (
      <div className="space-y-2">
        {authors.map((author) => (
          <Card
            className="flex items-center gap-2 px-2 border min-h-16"
            key={author?._id}
          >
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="User gavater"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grow-[1]">
              <CardTitle>{author?.name}</CardTitle>
              <CardDescription>{author?.profession}</CardDescription>
            </div>
            <div>
              <Button size={"sm"} className="rounded-full ">
                Subscribe
              </Button>
            </div>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
      <GlobalCard
        cardTitle={"Suggested Author"}
        cardDescription={"We suggest you the best author your need"}
        cardContent={AuthorComp()}
      ></GlobalCard>
    </>
  );
};

export default SuggestedAuthor;
