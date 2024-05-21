"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let LeadService = class LeadService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createLead) {
        return this.prisma.lead.create({
            data: createLead,
        });
    }
    async findAll() {
        return this.prisma.lead.findMany();
    }
    findOne(id) {
        return this.prisma.lead.findUnique({
            where: { id, },
        });
    }
    ;
    update(id, updateLead) {
        return this.prisma.lead.update({
            where: { id, },
            data: updateLead,
        });
    }
    remove(id) {
        return this.prisma.lead.delete({
            where: { id, },
        });
    }
    async leads(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.lead.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
};
exports.LeadService = LeadService;
exports.LeadService = LeadService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LeadService);
//# sourceMappingURL=lead.service.js.map