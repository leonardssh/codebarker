import { Prisma } from '@prisma/client';

const kata = Prisma.validator<Prisma.KataArgs>()({
  include: {
    answers: true,
    solution: true,
  },
});

export type KataModel = Prisma.KataGetPayload<typeof kata>;
