import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, lead } from '@prisma/client';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  create(createLead: lead) {
    return this.prisma.lead.create({
      data: createLead,
    });
  }

  // findAll() {
  //   return This action returns all lead;
  // }

  async findAll() {
    return this.prisma.lead.findMany();
  }

  findOne(id: number) {
    return this.prisma.lead.findUnique({
     where: {id, },
    
  }) };

  update(id: number, updateLead: lead) {
    return this.prisma.lead.update({
      where: {id, },
data: updateLead,
    
  })}

  remove(id: number) {
    return this.prisma.lead.delete({
      where: {id, },
    })
  }

  //funzione per prendere i leads che gli vengono passati
  async leads(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.leadWhereUniqueInput;
    where?: Prisma.leadWhereInput;
    orderBy?: Prisma.leadOrderByWithRelationInput;
  }): Promise<lead[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.lead.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
