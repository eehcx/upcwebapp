// import React from "react"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";

export function SingleMenu() {
    return (
        <Menubar className="bg-[#ECECEC] rounded-none border-none shadow-none">
            <MenubarMenu>
                <MenubarTrigger className="rounded-none cursor-pointer">
                    SIIUPC
                </MenubarTrigger>
                <MenubarContent className="rounded-none">
                    <MenubarItem className="rounded-none flex items-center gap-x-2">
                        Alumnos
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem className="rounded-none flex items-center gap-x-2">
                        Administrativos
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem className="rounded-none">
                        Moodle
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}