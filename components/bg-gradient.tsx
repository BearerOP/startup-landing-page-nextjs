import Image from "next/image";

const BgGradient = () => {
    return (
        <div className="py-14 bg-background pt-32 bg-black size-full">
            <div className="flex flex-col">
                <span className="text-muted-foreground font-semibold text-sm text-center">
                    TRUSTED BY TEAMS FROM AROUND THE WORLD
                </span>

                <div className="flex mt-6 gap-x-20 justify-center">
                    {[
                        { src: "https://cdn.magicui.design/companies/Google.svg", alt: "Google", width: 80, height: 112 },
                        { src: "https://cdn.magicui.design/companies/GitHub.svg", alt: "GitHub", width: 90, height: 100 },
                        { src: "https://cdn.magicui.design/companies/Microsoft.svg", alt: "Microsoft", width: 90, height: 100 },
                        { src: "https://cdn.magicui.design/companies/Notion.svg", alt: "Notion", width: 80, height: 100 },
                        { src: "https://cdn.magicui.design/companies/Uber.svg", alt: "Uber", width: 45, height: 100 },
                    ].map((image, index) => (
                        <div key={index} className="filter invert brightness-0">
                            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
                    </div>
                    ))}
                </div>
            </div>
            <div className="h-full w-full mt-24 z-[999] sticky">
                <div className="bg-orange-300/20 pointer-events-none relative -z-[2] mx-auto h-[45rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_40%)] my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,hsl(210, 100%, 50%),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:bg-background">
                </div>
            </div>
        </div>
    );
}

export default BgGradient;
