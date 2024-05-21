import { PrismaService } from 'src/prisma.service';
import { Prisma, lead } from '@prisma/client';
export declare class LeadService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createLead: lead): Prisma.Prisma__leadClient<{
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
    findOne(id: number): Prisma.Prisma__leadClient<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateLead: lead): Prisma.Prisma__leadClient<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__leadClient<{
        nome: string;
        email: string;
        id: number;
        telefono: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    leads(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.leadWhereUniqueInput;
        where?: Prisma.leadWhereInput;
        orderBy?: Prisma.leadOrderByWithRelationInput;
    }): Promise<lead[]>;
}
