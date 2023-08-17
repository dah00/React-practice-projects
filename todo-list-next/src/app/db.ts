import {PrismaClient } from '@prisma/client'

const globaleForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
    globaleForPrisma.prisma ?? 
    new PrismaClient({
        log: ['query'],
    })

if(process.env.NODE_ENV !== 'production') globaleForPrisma.prisma = prisma