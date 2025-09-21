import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { IS } from "@/shared/data";

interface Props {
    background: string;
}

const SingleMenu: React.FC<Props> = ({ background }) => {
    return (
        <Menubar className={`${background} rounded-none border-none shadow-none`}>
            <MenubarMenu>
                <MenubarTrigger className="rounded-none cursor-pointer bg-transparent">
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

export default SingleMenu;