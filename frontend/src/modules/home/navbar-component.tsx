// Note: Navbar component

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const NavbarComponent: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <Separator />
      <nav className="flex justify-between items-center p-4 bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-slate-100 italic"><Link href={"/"}>Docq.ai</Link></h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant={"default"}>Use Demo</Button>
          <Button variant={"outline"}>Sign In</Button>
        </div>
      </nav>
      {/* <Separator className="text-slate-500"/> */}
    </div>
  );
};

export default NavbarComponent;
