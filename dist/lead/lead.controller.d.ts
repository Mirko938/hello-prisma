import { LeadService } from './lead.service';
import { lead } from '@prisma/client';
export declare class LeadController {
    private readonly leadService;
    constructor(leadService: LeadService);
    create(createLead: lead): import(".prisma/client").Prisma.Prisma__leadClient<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__leadClient<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateLeadDto: lead): import(".prisma/client").Prisma.Prisma__leadClient<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__leadClient<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
