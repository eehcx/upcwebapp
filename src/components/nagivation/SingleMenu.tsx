import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { IS } from "@/const";

export function SingleMenu() {

    return (
        <Menubar className="bg-[#ECECEC] rounded-none border-none shadow-none">
            <MenubarMenu>
                <MenubarTrigger className="rounded-none cursor-pointer">
                    SIIUPC
                </MenubarTrigger>
                <MenubarContent className="rounded-none bg-[#f8f8f8]">
                    {IS.map((item, idx) => (
                        <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer" >
                            <MenubarItem className="rounded-none cursor-pointer flex items-center gap-x-2">
                                {item.name}
                            </MenubarItem>
                            {
                                <MenubarSeparator />
                            }
                        </a>
                    ))}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}