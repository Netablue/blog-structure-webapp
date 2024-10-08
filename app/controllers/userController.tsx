// controllers/userController.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getUsers() {
    return await prisma.user.findMany();
}