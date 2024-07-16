import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center bg-zinc-950">
      <div className="mx-auto w-full max-w-[800px] px-6 py-20 max-md:py-12">
        <div className="flex flex-col gap-8">
          <div className="mx-auto w-full">
            <div className="-mx-8 flex items-center gap-4">
              <Button
                asChild
                size="lg"
                variant="link"
                className="text-zinc-400"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 size-4" />
                  back to homepage
                </Link>
              </Button>
            </div>
          </div>

          {/* <div className="mx-auto w-full">
            <Image
              src={LOGO}
              alt="Logo"
              className="size-8"
              width={32}
              height={32}
            />
          </div> */}

          <div className="prose prose-invert mx-auto w-full">
            {children}
          </div>

          <div className="mx-auto w-full">
            <div className="-mx-8 flex items-center justify-between gap-4">
              <Button
                asChild
                size="lg"
                variant="link"
                className="text-zinc-400"
              >
                <Link href="/">
                  <ArrowLeft className="mr-2 size-4" />
                  back to homepage
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="link"
                className="text-zinc-400 gap-2"
              >
                <Link href="https://wa.me/5598985720808?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20site.">
                  Entrar em contato
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
