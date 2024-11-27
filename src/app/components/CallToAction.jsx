import { Button } from "flowbite-react";
import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Web development?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with 100 Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none">
          <a href="https://github.com/Aflal27">
            <p>100 Projects</p>
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://blog.byldgroup.com/wp-content/uploads/2020/01/Self-Development.jpg"
          alt="JavaScript usage"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
